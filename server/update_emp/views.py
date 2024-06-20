
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Employee
from .serializers import EmployeeSerializer

class EmployeeUpdateView(APIView):
    def put(self, request, employee_id):
        try:
            employee = Employee.objects.get(employee_id=employee_id)
        except Employee.DoesNotExist:
            return Response({"success": False, "message": "Employee not found."}, status=status.HTTP_404_NOT_FOUND)
        
        data = request.data.copy()

        # Remove the image field if it is present in the request data
        data.pop('image', None)

        serializer = EmployeeSerializer(employee, data=data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"success": True, "message": "Update successful"}, status=status.HTTP_200_OK)
        return Response({"success": False, "message": "Update failed", "errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
