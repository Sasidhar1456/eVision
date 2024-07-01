from django.urls import path
from .views import AdminCreateView

urlpatterns = [
    path('create_account/', AdminCreateView.as_view(), name='register'),
]
