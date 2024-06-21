from django.db import models

class Employee(models.Model):
    employee_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    phone_no = models.CharField(max_length=20)
    department = models.CharField(max_length=100, null=False)
    joindate = models.DateField()
    image = models.TextField()  
    
    class Meta:
        db_table = 'employees'  
        

    def __str__(self):
        return self.name
