# Generated by Django 3.2.4 on 2021-08-18 07:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('item', '0006_product_valid'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='area',
            field=models.CharField(default='서울 강동구', max_length=100),
        ),
    ]