# Generated by Django 3.0.7 on 2021-03-18 16:34

import datetime
from django.db import migrations, models
import django_resized.forms


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BlogPost',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50)),
                ('slug', models.SlugField()),
                ('category', models.CharField(choices=[('world', 'World'), ('modelling', 'Modelling'), ('science', 'Science'), ('design', 'Design'), ('travel', 'Travel'), ('culture', 'Culture'), ('opinion', 'Opinion'), ('technology', 'Technology'), ('health', 'Health')], default='world', max_length=50)),
                ('thumbnail', django_resized.forms.ResizedImageField(crop=None, force_format='WEBP', keep_meta=True, quality=75, size=[640, 360], upload_to='photos/%Y/%m/%d/')),
                ('thumbnail_description', models.CharField(default='thumbnail description', max_length=50)),
                ('excerpt', models.CharField(max_length=150)),
                ('month', models.CharField(max_length=3)),
                ('day', models.CharField(max_length=2)),
                ('content', models.TextField()),
                ('featured', models.BooleanField(default=False)),
                ('date_created', models.DateTimeField(blank=True, default=datetime.datetime.now)),
            ],
        ),
    ]
