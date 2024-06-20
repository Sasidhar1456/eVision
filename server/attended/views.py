from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Attended
from .serializers import AttendedSerializer

class AttendedList(APIView):
    def get(self, request):
        attended = Attended.objects.all()
        serializer = AttendedSerializer(attended, many=True)
        return Response({"success": True, "attended": serializer.data}, status=status.HTTP_200_OK)
