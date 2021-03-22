from rest_framework import permissions
from rest_framework.generics import ListAPIView
from .models import Education, Experience
from .serializers import ExperienceSerializer, EducationSerializer


class ExperienceListView(ListAPIView):
    queryset = Experience.objects.order_by('-start_date')
    serializer_class = ExperienceSerializer
    permission_classes = (permissions.AllowAny,)


class EducationListView(ListAPIView):
    queryset = Education.objects.order_by('-start_date')
    serializer_class = EducationSerializer
    permission_classes = (permissions.AllowAny,)
