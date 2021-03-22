from django.urls import path
from .views import ExperienceListView, EducationListView


urlpatterns = [
    path('experience/', ExperienceListView.as_view()),
    path('education/', EducationListView.as_view()),

]