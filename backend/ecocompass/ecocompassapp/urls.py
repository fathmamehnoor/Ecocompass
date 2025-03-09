from django.urls import path
from .views import ESGCompanyListView

urlpatterns = [
    path('esg-companies/', ESGCompanyListView.as_view(), name='esg-companies'),
]

