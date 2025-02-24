from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework import status
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from .models import CustomUser, ESGAnalysis
from .serializers import RegisterSerializer, UserSerializer, ESGAnalysisSerializer
from .utils.bert_analysis import analyze_esg

# Generate JWT tokens for a user
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
        'user_type': user.user_type,  # Corrected user_type retrieval
    }

# Signup API
@api_view(['POST'])
def register_user(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        return Response(get_tokens_for_user(user), status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Login API
@api_view(['POST'])
def login_user(request):
    email = request.data.get("email")
    password = request.data.get("password")
    user = authenticate(email=email, password=password)

    if user:
        return Response(get_tokens_for_user(user), status=status.HTTP_200_OK)
    
    return Response({"error": "Invalid email or password"}, status=status.HTTP_401_UNAUTHORIZED)

# Get User Data API
@api_view(['GET'])
def get_user_data(request):
    user = request.user
    serializer = UserSerializer(user)
    return Response(serializer.data)  # Corrected

class ESGAnalysisView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def post(self, request, *args, **kwargs):
        file = request.FILES.get('file')

        if not file:
            return Response({"error": "No file provided"}, status=status.HTTP_400_BAD_REQUEST)
        
        analysis_result = analyze_esg(file)

        esg_analyse = ESGAnalysis.objects.create(file_name=analysis_result["file_name"],
                                                  esg_analysis=analysis_result["esg_analysis"],
                                                  esg_score=analysis_result["esg_score"])
        serializer = ESGAnalysisSerializer(esg_analyse)
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    
def latest_esg(request):
    latest_entry = ESGAnalysis.objects.last()
    if latest_entry:
        return Response({
            "file_name": latest_entry.file_name,
            "esg_analysis": latest_entry.esg_analysis,
            "esg_score": latest_entry.esg_score
        })
    else:
        return Response({"error": "No ESG data found"}, status=404)
