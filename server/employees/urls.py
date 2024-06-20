from django.urls import path
from .views import EmployeeListView

urlpatterns = [
    path('admin-employees/', EmployeeListView.as_view(), name='admin-employees'),
]
