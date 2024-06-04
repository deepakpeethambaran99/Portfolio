from django.urls import path
from .views import ProfileAPI

urlpatterns = [
    path('<str:profile_id>/', ProfileAPI.as_view(), name='profile')
]
