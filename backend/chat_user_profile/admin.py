from django.contrib import admin
from .models import Contact, Profile, VerificationCode

admin.site.register(Contact)
admin.site.register(VerificationCode)
admin.site.register(Profile)

# Register your models here.
