
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from notattended.views import NotAttendedView

urlpatterns = [
    path("admin/", admin.site.urls),
    path('', include('login.urls')),
    path('', include('query.urls')),
    path('', include('employees.urls')),
    path('', include('insert_emp.urls')),
    path('', include('update_emp.urls')),
    path('', include('attended.urls')),
    path('', include('breaches.urls')),
    path('not_attended/', NotAttendedView.as_view(), name='not_attended'),
    path('', include('insert_attended.urls')),
    path('', include('add_breach.urls')),
    path('', include('create_account.urls')),

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)