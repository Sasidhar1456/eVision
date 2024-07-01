from django.urls import path
from .views import breach_list, delete_breach

urlpatterns = [
    path('breaches/', breach_list, name='breach-list'),
    path('delete_breach/<int:breach_id>/', delete_breach, name='delete-breach'),
]
