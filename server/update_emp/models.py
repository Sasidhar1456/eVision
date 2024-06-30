
from django.db import models

class Employee(models.Model):
    employee_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    phone_no = models.CharField(max_length=15)
    department = models.CharField(max_length=100)
    joindate = models.DateField()
    image = models.TextField(null=True, blank=True)

    class Meta:
        db_table = 'employees'
        managed = False 

    def __str__(self):
        return self.name
