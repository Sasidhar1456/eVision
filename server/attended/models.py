from django.db import models

class Attended(models.Model):
    attended_id = models.AutoField(primary_key=True)
    employee_id = models.IntegerField()
    employee_name = models.CharField(max_length=100)
    attendedtime = models.DateTimeField()
    image = models.BinaryField(blank=True, null=True)

    class Meta:
        db_table = 'attended'
        managed = False

    def __str__(self):
        return self.employee_name
