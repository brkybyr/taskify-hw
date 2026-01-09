from django.contrib import admin
from .models import Course

@admin.register(Course)
class CourseAdmin(admin.ModelAdmin):
    list_display = ('title', 'owner', 'start_date', 'end_date', 'created_at', 'updated_at')
    list_filter = ('start_date', 'end_date')
    search_fields = ('title', 'owner__username', 'owner__email')
    ordering = ('-created_at',)
