from django.db import models
from django.core.validators import RegexValidator

import uuid
from django_ckeditor_5.fields import CKEditor5Field

class TimeStamp(models.Model):
    created_on = models.DateTimeField(auto_now_add=True)

    class Meta:
        abstract = True


class Skills(TimeStamp):
    name = models.CharField(max_length=50)

    logo = models.FileField(upload_to="logo/", max_length=100)

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name = 'Skills'
        verbose_name_plural = 'Skills'


class Profile(TimeStamp):
    profile_id = models.UUIDField(help_text="Unique profile id",
                                  default=uuid.uuid4, primary_key=True, unique=True, editable=False)

    first_name = models.CharField(max_length=50,
                                  validators=[
                                      RegexValidator(
                                          regex=r'^[a-zA-Z]+$',
                                          message='First name must contain only alphabetic characters.',
                                          code='invalid_name'
                                      )
                                  ]

                                  )

    middle_name = models.CharField(max_length=50,validators=[
                                      RegexValidator(
                                          regex=r'^[a-zA-Z]+$',
                                          message='Middle name must contain only alphabetic characters.',
                                          code='invalid_name'
                                      )
                                  ] ,blank=True)

    last_name = models.CharField(max_length=50, validators=[
                                      RegexValidator(
                                          regex=r'^[a-zA-Z]+$',
                                          message='Last name must contain only alphabetic characters.',
                                          code='invalid_name'
                                      )
                                  ])

    skills = models.ManyToManyField(Skills)

    resume = models.FileField(upload_to="resumes/", max_length=100)

    def __str__(self) -> str:
        return str(self.profile_id)

    def get_name(self):
        # This will return the full name from the Profile.
        if bool(self.middle_name):
            return f"{self.first_name} {self.middle_name} {self.last_name}"
        else:
            return f"{self.first_name} {self.last_name}"

    get_name.short_description = 'Full Name'

    def save(self, *args, **kwargs) -> None:
        if self.first_name:
            self.first_name = self.first_name.strip()

        if self.middle_name:
            self.middle_name = self.middle_name.strip()

        if self.last_name:
            self.last_name = self.last_name.strip()

        return super().save(*args, **kwargs)


class Designation(models.Model):
    profile_id = models.ForeignKey(Profile, on_delete=models.CASCADE)
    
    title = models.CharField(max_length=100, validators=[
                                      RegexValidator(
                                          regex=r'^[a-zA-Z ]+$',
                                          message='Title must contain only alphabetic characters.',
                                          code='invalid_title'
                                      )
                                  ])
    
    article = models.CharField(max_length=50, help_text="Example: a/an", blank=True, validators=[
                                      RegexValidator(
                                          regex=r'^[a-zA-Z ]+$',
                                          message='Article must contain only alphabetic characters.',
                                          code='invalid_article'
                                      )
                                  ])
    
    def __str__(self) -> str:
        return str(self.title)
    
class WorkExperience(models.Model):
    profile_id = models.ForeignKey(Profile, on_delete=models.CASCADE)
    
    company_name = models.CharField(max_length=50)
    
    joined_date = models.DateField()
    
    till_date = models.DateField(blank=True, null=True)
    
    description = CKEditor5Field('Text', config_name='extends')
    
    company_logo = models.FileField(upload_to="logo/company/", max_length=100, blank=True, null=True)
    
    def __str__(self):
        return f"{self.company_name} - {self.profile_id.get_name()}"
    

class Projects(models.Model):
    profile_id = models.ForeignKey(Profile, on_delete=models.CASCADE)
    
    title   = models.CharField(max_length=100)
    
    description = models.TextField()
    
    github_link = models.CharField(max_length=100, blank=True, null=True)
    
    project_link = models.CharField(max_length=100, blank=True, null=True)
    
    skills_used = models.ManyToManyField(Skills)
    
    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = 'Proejct'
        verbose_name_plural = 'Proejcts'