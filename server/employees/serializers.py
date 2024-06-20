from rest_framework import serializers
from .models import Employee
import base64

class EmployeeSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Employee
        fields = ['employee_id', 'name', 'email', 'phone_no', 'department', 'joindate', 'image']

    def get_image(self, obj):
        if obj.image:
            if isinstance(obj.image, memoryview):
                return base64.b64encode(obj.image.tobytes()).decode('utf-8')
            return obj.image  # Assuming the image is already in base64 format
        return None
