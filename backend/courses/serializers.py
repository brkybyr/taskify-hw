from rest_framework import serializers
from .models import Course

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = ['id', 'owner', 'title', 'description', 'start_date', 'end_date', 'created_at', 'updated_at']
