from django.urls import path
from .views import AttendedList

urlpatterns = [
    path('attended/', AttendedList.as_view(), name='attended-list'),
]
