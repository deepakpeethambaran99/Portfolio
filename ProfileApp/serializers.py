# serializers.py
from rest_framework import serializers
from .models import Profile, Skills, Designation, Projects, WorkExperience

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skills
        fields = "__all__"

class DesignationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Designation
        exclude = ['profile_id']

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        exclude = ['profile_id']

class WorkExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = WorkExperience
        exclude = ['profile_id']

class ProfileSerializer(serializers.ModelSerializer):
    skills = SkillSerializer(many=True, read_only=True)
    designations = DesignationSerializer(many=True, read_only=True, source='designation')
    projects_worked_on = ProjectSerializer(many=True, read_only=True, source='projects')
    work_experiences = WorkExperienceSerializer(many=True, read_only=True, source='work_experience')

    profile_id = serializers.SerializerMethodField()
    full_name = serializers.SerializerMethodField()

    class Meta:
        model = Profile
        fields = "__all__"

    def get_profile_id(self, obj):
        return str(obj.profile_id)

    def get_full_name(self, obj):
        return obj.get_name()