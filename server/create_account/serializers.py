from rest_framework import serializers
from .models import Admin

class AdminSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True)

    class Meta:
        model = Admin
        fields = ['admin_id','admin_email', 'admin_password', 'confirm_password']

    def validate(self, data):
        if data['admin_password'] != data['confirm_password']:
            raise serializers.ValidationError("Passwords do not match")
        return data

    def create(self, validated_data):
        validated_data.pop('confirm_password')
        return Admin.objects.create(**validated_data)
