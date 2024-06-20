from django.db import models

class Employee(models.Model):
    employee_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_no = models.CharField(max_length=15)
    department = models.CharField(max_length=100)
    joindate = models.DateField()
    image = models.BinaryField(blank=True, null=True)

    class Meta:
        db_table = 'employees'
        managed = False

    def __str__(self):
        return self.name

class Attended(models.Model):
    attended_id = models.AutoField(primary_key=True)
    employee = models.ForeignKey(Employee, on_delete=models.CASCADE)
    attendedtime = models.DateTimeField()
    image = models.BinaryField(blank=True, null=True)

    class Meta:
        db_table = 'attended'

    def __str__(self):
        return f"Attendance for {self.employee.name}"
   
