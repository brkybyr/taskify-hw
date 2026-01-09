# tasks/serializers.py
from rest_framework import serializers
from .models import Task
from courses.models import Course

class TaskSerializer(serializers.ModelSerializer):
    # course alanını PrimaryKeyRelatedField ile tanımlıyoruz
    course = serializers.PrimaryKeyRelatedField(queryset=Course.objects.all())

    class Meta:
        model = Task
        fields = "__all__"

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # Sadece kullanıcıya ait kursları göstermek için queryset filtreleme
        user = self.context['request'].user
        if not user.is_staff:
            self.fields['course'].queryset = Course.objects.filter(owner=user)
