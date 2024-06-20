from rest_framework import serializers
from .models import Attended

class AttendedSerializer(serializers.ModelSerializer):
    class Meta:
        model = Attended
        fields = '__all__'
