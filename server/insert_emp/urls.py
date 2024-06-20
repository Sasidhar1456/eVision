

from django.urls import path
from .views import EmployeeListView

urlpatterns = [
    path('create-employees/', EmployeeListView.as_view(), name='employee-list')
]
