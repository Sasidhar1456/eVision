from rest_framework import serializers
from .models import Breach
import base64

class BreachSerializer(serializers.ModelSerializer):
    class Meta:
        model = Breach
        fields = ['breach_id', 'breach_time', 'image']

    def get_image(self, obj):
        if obj.image:
            if isinstance(obj.image, memoryview):
                return base64.b64encode(obj.image.tobytes()).decode('utf-8')
            return obj.image  # Assuming the image is already in base64 format
        return None

