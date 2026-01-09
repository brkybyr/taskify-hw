from django.contrib import admin
from .models import Task

@admin.register(Task)
class TaskAdmin(admin.ModelAdmin):
    list_display = ('title', 'course', 'task_type', 'status', 'priority', 'due_date', 'created_at')
    list_filter = ('task_type', 'status', 'priority', 'due_date')
    search_fields = ('title', 'course__title')
    ordering = ('-due_date',)
