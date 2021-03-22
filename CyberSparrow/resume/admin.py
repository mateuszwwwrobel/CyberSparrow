from django.contrib import admin
from .models import Education, Experience


@admin.register(Education)
class EducationAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'school', 'finish_date')
    list_display_links = ('id', 'title')
    search_fields = ('title', )
    ordering = ('-start_date', )


@admin.register(Experience)
class ExperienceAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'company', 'finish_date')
    list_display_links = ('id', 'title')
    search_fields = ('name', )
    ordering = ('-start_date', )
