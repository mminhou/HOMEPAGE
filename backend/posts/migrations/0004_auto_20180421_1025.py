# Generated by Django 2.0.2 on 2018-04-21 10:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('posts', '0003_remove_posts_file_name'),
    ]

    operations = [
        migrations.AlterField(
            model_name='posts',
            name='created',
            field=models.DateTimeField(verbose_name='date joined'),
        ),
    ]
