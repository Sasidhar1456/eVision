# Generated by Django 4.2.13 on 2024-06-02 16:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Query",
            fields=[
                ("query_id", models.AutoField(primary_key=True, serialize=False)),
                ("name", models.CharField(max_length=255)),
                ("phone_no", models.CharField(max_length=15)),
                ("email", models.EmailField(max_length=255)),
                ("query", models.TextField()),
            ],
            options={
                "db_table": "queries",
                "managed": False,
            },
        ),
    ]
