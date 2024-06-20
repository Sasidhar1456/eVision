from django.core.management.base import BaseCommand
from django.contrib.auth.hashers import make_password
from login.models import Admin

class Command(BaseCommand):
    help = 'Update all admin passwords to use Django\'s default hashing algorithm'

    def handle(self, *args, **kwargs):
        admins = Admin.objects.all()
        for admin in admins:
            admin.admin_password = make_password(admin.admin_password)
            admin.save()
        self.stdout.write(self.style.SUCCESS('Successfully updated all admin passwords'))