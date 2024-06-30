from django.db import models

class Breach(models.Model):
    breach_id = models.AutoField(primary_key=True)
    breach_time = models.DateTimeField()
    image = models.TextField(blank=True, null=True)

    class Meta:
        db_table = 'breaches' 
        managed = False

    def __str__(self):
         return f'Breach {self.breach_id} at {self.breach_time}'
