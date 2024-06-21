from django.urls import path
from .views import insert_breach

urlpatterns = [
    path('new_breach/', insert_breach, name='insert_breach'),
]
