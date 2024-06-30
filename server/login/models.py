from django.db import models

class Admin(models.Model):
    admin_id = models.AutoField(primary_key=True)
    admin_email = models.EmailField(unique=True)
    admin_password = models.CharField(max_length=128)
    
    class Meta:
        db_table = 'admin'



  