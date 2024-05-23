from django.contrib import admin
from .models import *

# Register your models here.
class SkillAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ['name']
    readonly_fields = ('created_on',)

class ProfileAdmin(admin.ModelAdmin):
    list_display = ('profile_id',  'get_name', 'created_on',)
    search_fields = ['profile_id', 'first_name', 'last_name', 'middle_name']
    readonly_fields = ('created_on',)

admin.site.register(Profile, ProfileAdmin)
admin.site.register(Skills, SkillAdmin)
admin.site.register(Designation)