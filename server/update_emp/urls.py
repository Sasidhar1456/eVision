from django.urls import path
from .views import EmployeeUpdateView

urlpatterns = [
    path('update-employee/<int:employee_id>/', EmployeeUpdateView.as_view(), name='update-employee'),
]