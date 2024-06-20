from django.db import models

class Query(models.Model):
    query_id = models.AutoField(primary_key=True)  # Reflects the existing primary key
    name = models.CharField(max_length=255)
    phone_no = models.CharField(max_length=15)
    email = models.EmailField(max_length=255)
    query = models.TextField()

    class Meta:
        db_table = 'queries'  # Use the existing table
        managed = False  # Tell Django not to manage the creation/deletion of this table

    def __str__(self):
        return self.name
