from django.shortcuts import render
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView

class ExperienceListView(ListAPIView):
    pass

class EducationListView(ListAPIView):
    pass