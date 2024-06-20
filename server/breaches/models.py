# breaches/models.py

from django.db import models

class Breach(models.Model):
    breach_id = models.AutoField(primary_key=True)
    breach_time = models.DateTimeField()
    image = models.BinaryField(blank=True, null=True)

    class Meta:
        db_table = 'breaches' 
    
    def __str__(self):
        return f"Breach {self.breach_id}"
