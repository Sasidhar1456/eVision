from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import AdminSerializer

class AdminCreateView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = AdminSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'success': True, 'result': 'admin created'}, status=status.HTTP_201_CREATED)
        return Response({'success': False, 'errors': serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
