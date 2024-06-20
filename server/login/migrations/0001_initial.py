# Generated by Django 4.2.13 on 2024-05-31 11:08

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Admin",
            fields=[
                ("admin_id", models.AutoField(primary_key=True, serialize=False)),
                ("admin_email", models.EmailField(max_length=254, unique=True)),
                ("admin_password", models.CharField(max_length=128)),
            ],
            options={
                "db_table": "admin",
            },
        ),
    ]
