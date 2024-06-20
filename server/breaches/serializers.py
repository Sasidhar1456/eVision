
from rest_framework import serializers
from .models import Breach

class BreachSerializer(serializers.ModelSerializer):
    class Meta:
        model = Breach
        fields = ['breach_id', 'breach_time', 'image']
