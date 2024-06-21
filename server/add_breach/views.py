from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Breach
from .serializers import BreachSerializer

@api_view(['POST'])
def insert_breach(request):
    if request.method == 'POST':
        serializer = BreachSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"success": True, "message": "Inserted successfully"}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
