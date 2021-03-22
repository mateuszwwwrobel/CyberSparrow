from django.db import models


class Education(models.Model):
    title = models.CharField(max_length=100)
    school = models.CharField(max_length=100)
    city = models.CharField(max_length=50)
    start_date = models.DateField()
    finish_date = models.DateField()
    final_project = models.CharField(max_length=300)
    description = models.TextField()

    def __str__(self):
        return f'{self.title} - {self.school}'


class Experience(models.Model):
    title = models.CharField(max_length=100)
    company = models.CharField(max_length=100)
    city = models.CharField(max_length=50)
    start_date = models.DateField()
    finish_date = models.DateField()
    description = models.TextField()

    def __str__(self):
        return f'{self.title} - {self.company}'
