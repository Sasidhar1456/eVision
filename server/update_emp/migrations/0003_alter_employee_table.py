# Generated by Django 4.2.13 on 2024-06-10 09:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("update_emp", "0002_alter_employee_options"),
    ]

    operations = [
        migrations.AlterModelTable(
            name="employee",
            table="employees",
        ),
    ]
