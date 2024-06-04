import logging
import sys

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from ProfileApp.serializers import ProfileSerializer
from ProfileApp.models import Profile

LOGGER = logging.getLogger(__name__)

APP_LOGGER_EXTRA = {"AppName": "django.request"}


class ProfileAPI(APIView):
    def get(self, request, profile_id):
        """
            Returns Profile details
        """
        response = {}
        response["status"]  = "500"
        response["message"] = "Internal Server Error!"
        response["data"]    = None
        
        try:
            LOGGER.info("Inside ProfileAPI View", extra=APP_LOGGER_EXTRA)
            profile_obj     = Profile.objects.filter(profile_id=profile_id).prefetch_related("designation", "skills", "work_experience", "projects").first()
            serializer      = ProfileSerializer(profile_obj)
            profile_data    = serializer.data
            response["status"]  = api_status = status.HTTP_200_OK 
            response["message"] = "SUCCESS"
            response["data"]    = profile_data   
            LOGGER.info("Successfully returned response 200", extra=APP_LOGGER_EXTRA)
            
        except Exception as e:
            exc_type, exc_obj, exc_tb = sys.exc_info()
            LOGGER.error("Error inside ProfileAPI View: %s at line no. %s",str(e),str(exc_tb.tb_lineno), extra=APP_LOGGER_EXTRA)
            print(e)
            response["status"]  = api_status = status.HTTP_500_INTERNAL_SERVER_ERROR
            
        return Response(data=response, status=api_status)   