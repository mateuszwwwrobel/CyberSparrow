from django.db import models
from datetime import datetime
from django.template.defaultfilters import slugify
from django_resized import ResizedImageField


class Categories(models.TextChoices):
    WORLD = 'world'
    MODELLING = 'modelling'
    SCIENCE = 'science'
    TRAVEL = 'travel'
    HISTORY = 'history'
    TECHNOLOGY = 'technology'
    PYTHON = 'python'


class BlogPost(models.Model):
    title = models.CharField(max_length=50)
    slug = models.SlugField()
    category = models.CharField(max_length=50, choices=Categories.choices, default=Categories.WORLD)
    thumbnail = ResizedImageField(upload_to='photos/%Y/%m/%d/')
    thumbnail_description = models.CharField(max_length=50, default='thumbnail description')
    excerpt = models.CharField(max_length=150)
    year = models.CharField(max_length=4)
    month = models.CharField(max_length=3)
    day = models.CharField(max_length=2)
    content = models.TextField()
    featured = models.BooleanField(default=False)
    date_created = models.DateTimeField(default=datetime.now, blank=True)

    def save(self, *args, **kwargs):
        original_slug = slugify(self.title)
        queryset = BlogPost.objects.all().filter(slug__iexact=original_slug).count()

        count = 1
        slug = original_slug
        while(queryset):
            slug = f'{original_slug}-{str(count)}'
            count += 1
            queryset = BlogPost.objects.all().filter(slug__iexact=slug).count()

        self.slug = slug

        if self.featured:
            try:
                temp = BlogPost.objects.get(featured=True)
            except BlogPost.DoesNotExist:
                pass
            else:
                if self != temp:
                    temp.featured = False
                    temp.save()
        super(BlogPost, self).save(*args, **kwargs)

    def __str__(self):
        return self.title
