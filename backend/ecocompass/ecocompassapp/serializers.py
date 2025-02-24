from rest_framework import serializers
from django.contrib.auth import get_user_model
from .models import ESGAnalysis

User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'user_type']

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User  
        fields = ['name', 'email', 'password', 'user_type']

    def create(self, validated_data):
        user = User.objects.create_user(
            name=validated_data['name'],
            email=validated_data['email'],
            password=validated_data['password'],
            user_type=validated_data.get('user_type', 'Company')  # Default to 'Company' if not provided
        )
        return user


class ESGAnalysisSerializer(serializers.ModelSerializer):
    class Meta:
        model = ESGAnalysis
        fields = "__all__"