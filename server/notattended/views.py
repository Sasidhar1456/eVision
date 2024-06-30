from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Employee
from .serializers import EmployeeSerializer

class NotAttendedView(APIView):
    def get(self, request):
        employees = Employee.objects.filter(attended__isnull=True)
        serializer = EmployeeSerializer(employees, many=True)
        return Response({
            'success': True,
            'response': serializer.data
        })
