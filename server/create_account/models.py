from django.db import models

class Admin(models.Model):
    admin_id = models.IntegerField(primary_key=True)
    admin_email = models.EmailField(unique=True)
    admin_password = models.CharField(max_length=255)

    class Meta:
        db_table = 'admin'
        managed=False

    def __str__(self):
        return self.admin_email



  