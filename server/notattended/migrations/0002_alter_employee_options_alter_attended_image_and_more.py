# Generated by Django 5.0.2 on 2024-06-20 11:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notattended', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='employee',
            options={'managed': False},
        ),
        migrations.AlterField(
            model_name='attended',
            name='image',
            field=models.BinaryField(blank=True, null=True),
        ),
        migrations.AlterModelTable(
            name='attended',
            table='attended',
        ),
    ]
