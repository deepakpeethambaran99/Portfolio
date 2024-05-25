from django.contrib import admin
from .models import *
from markdownx.admin import MarkdownxModelAdmin

# Register your models here.
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ['name']
    readonly_fields = ('created_on',)

class ProfileAdmin(admin.ModelAdmin):
    list_display = ('profile_id',  'get_name', 'created_on',)
    search_fields = ['profile_id', 'first_name', 'last_name', 'middle_name']
    readonly_fields = ('created_on',)
    
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('profile_id',  'title')

admin.site.register(Profile, ProfileAdmin)
admin.site.register(Skills, SkillAdmin)
admin.site.register(Designation)
admin.site.register(WorkExperience, MarkdownxModelAdmin)
admin.site.register(Projects, ProjectAdmin)
