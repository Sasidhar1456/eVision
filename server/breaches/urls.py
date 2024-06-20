from django.urls import path
from .views import breach_list

urlpatterns = [
    path('breaches/', breach_list, name='breach-list'),
]
