from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Breach
from .serializers import BreachSerializer

@api_view(['GET'])
def breach_list(request):
    breaches = Breach.objects.all()
    serializer = BreachSerializer(breaches, many=True)
    return Response({
        'success': True,
        'breaches': serializer.data
    }, status=status.HTTP_200_OK)
