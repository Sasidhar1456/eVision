from django.urls import path
from .views import QueryCreateView

urlpatterns = [
    path('admin-query/', QueryCreateView.as_view(), name='admin-query'),
]
