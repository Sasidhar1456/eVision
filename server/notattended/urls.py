from django.urls import path
from .views import NotAttendedView

urlpatterns = [
    path('not_attended/', NotAttendedView.as_view(), name='employees-without-attendance'),
]