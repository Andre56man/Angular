from django.contrib import admin
from .models import Project, ProjectImage


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'status', 'order', 'created_at']
    list_filter = ['status', 'created_at']
    search_fields = ['title', 'description']
    prepopulated_fields = {'slug': ('title',)}
    fieldsets = (
        ('Informations de base', {
            'fields': ('title', 'slug', 'description', 'long_description', 'image')
        }),
        ('Détails techniques', {
            'fields': ('technologies', 'github_link', 'demo_link')
        }),
        ('Statut', {
            'fields': ('status', 'order')
        }),
    )


@admin.register(ProjectImage)
class ProjectImageAdmin(admin.ModelAdmin):
    list_display = ['project', 'caption', 'created_at']
    list_filter = ['project', 'created_at']
