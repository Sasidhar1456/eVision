from rest_framework import serializers
from .models import Employee

class EmployeeSerializer(serializers.ModelSerializer):
    

    class Meta:
        model = Employee
        fields = ['employee_id', 'name', 'email', 'phone_no', 'department', 'joindate', 'image']

    
