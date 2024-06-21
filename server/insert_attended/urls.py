from django.urls import path
from .views import AttendedCreateView

urlpatterns = [
    path('new_attended/', AttendedCreateView.as_view(), name='attended-create'),
]
