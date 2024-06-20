# Generated by Django 4.2.13 on 2024-06-02 16:17

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Employee",
            fields=[
                (
                    "employee_id",
                    models.UUIDField(
                        default=uuid.uuid4,
                        editable=False,
                        primary_key=True,
                        serialize=False,
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                ("email", models.EmailField(max_length=254, unique=True)),
                ("phone", models.CharField(blank=True, max_length=20, null=True)),
                ("department", models.CharField(blank=True, max_length=255, null=True)),
                ("joindate", models.DateField(blank=True, null=True)),
                ("image", models.BinaryField(blank=True, null=True)),
            ],
        ),
    ]
