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

@api_view(['DELETE'])
def delete_breach(request, breach_id):
    try:
        breach = Breach.objects.get(breach_id=breach_id)
        breach.delete()
        return Response({
            'success': True,
            'result': 'Breach deleted successfully'
        }, status=status.HTTP_200_OK)
    except Breach.DoesNotExist:
        return Response({
            'success': False,
            'result': 'Breach not found'
        }, status=status.HTTP_404_NOT_FOUND)