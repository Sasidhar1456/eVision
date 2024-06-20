# Generated by Django 4.2.13 on 2024-06-10 06:48

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Attended",
            fields=[
                ("attended_id", models.AutoField(primary_key=True, serialize=False)),
                ("employee_id", models.IntegerField()),
                ("employee_name", models.CharField(max_length=100)),
                ("attendedtime", models.DateTimeField()),
                ("image", models.ImageField(upload_to="images/")),
            ],
        ),
    ]