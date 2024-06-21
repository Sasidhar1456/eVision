from rest_framework import serializers
import base64
from .models import Attended

class AttendedSerializer(serializers.ModelSerializer):
    image = serializers.CharField(write_only=True)

    class Meta:
        model = Attended
        fields = ['attended_id', 'employee_id', 'employee_name', 'attendedtime', 'image']

    def get_image(self, obj):
        if obj.image:
            if isinstance(obj.image, memoryview):
                return base64.b64encode(obj.image.tobytes()).decode('utf-8')
            return obj.image  # Assuming the image is already in base64 format
        return None

