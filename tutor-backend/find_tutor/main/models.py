# from django.db import models
from django.contrib.auth.models import *
# import json
from django.db.models import JSONField


# from django.db.models.signals import pre_save, post_save

class User(AbstractUser):
    username = models.CharField(max_length=20, unique=True, blank=False, null=False)
    encrypted_password = models.CharField(max_length=20)
    smtp_password = models.CharField(max_length=20)
    first_name = models.CharField(max_length=20, blank=False, null=True)
    last_name = models.CharField(max_length=15, blank=False, null=True)
    age = models.IntegerField(null=True, blank=False)
    email = models.CharField(max_length=30)
    mobile = models.CharField(max_length=15, blank=False, null=True)
    is_student = models.BooleanField(default=True)
    updated_at = models.DateTimeField(blank=True, null=True, auto_now=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.username

    class Meta:
        db_table = 'users'


class Rating(models.Model):
    rating = models.IntegerField(default=0, null=True, blank=False)
    user = models.ForeignKey(User, related_name='user_rating', on_delete=models.DO_NOTHING)
    created_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    created_by = models.ForeignKey(User, related_name='rating_created_by', on_delete=models.DO_NOTHING)  # TODO
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.rating

    class Meta:
        db_table = 'ratings'


class Qualification(models.Model):
    user = models.ForeignKey(User, related_name='user_qualification', on_delete=models.DO_NOTHING)
    latest_qualification = models.CharField(max_length=100, null=True, blank=False)
    certification = JSONField(default=dict, null=True, blank=True)
    subjects = JSONField(default=dict, null=True, blank=False)
    college_name = models.CharField(max_length=150, null=True, blank=False)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return self.latest_qualification

    class Meta:
        db_table = 'qualifications'


class Address(models.Model):
    user = models.ForeignKey(User, related_name='user_address', on_delete=models.DO_NOTHING)
    address_line_1 = models.CharField(max_length=150, null=True, blank=False)
    address_line_2 = models.CharField(max_length=150, null=True, blank=True)
    city = models.CharField(max_length=50, null=True, blank=False)
    state = models.CharField(max_length=50, blank=False, null=True)
    country = models.CharField(max_length=20, blank=False, null=True)
    zipcode = models.CharField(max_length=12, null=True, blank=False)
    address_type = models.CharField(max_length=50, null=True, blank=False)
    created_at = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    updated_at = models.DateTimeField(auto_now=True, blank=True, null=True)

    class Meta:
        db_table = 'address'