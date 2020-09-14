from rest_framework import serializers
from .models import User


class UserSerializer(serializers.ModelSerializer):
    smtp_password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'encrypted_password', 'smtp_password', 'email', 'mobile', 'age', 'is_student')
        extra_kwargs = {'password': {'write_only': True}}


class UserDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'first_name', 'last_name', 'email', 'mobile', 'age', 'is_student')