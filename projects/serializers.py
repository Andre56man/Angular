from rest_framework import serializers
from .models import Project, ProjectImage


class ProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = ['id', 'image', 'caption']


class ProjectSerializer(serializers.ModelSerializer):
    images = ProjectImageSerializer(many=True, read_only=True)
    technologies_list = serializers.SerializerMethodField()
    
    class Meta:
        model = Project
        fields = [
            'id', 'title', 'slug', 'description', 'long_description',
            'image', 'technologies', 'technologies_list', 'status',
            'github_link', 'demo_link', 'created_at', 'updated_at',
            'order', 'images'
        ]
    
    def get_technologies_list(self, obj):
        return obj.technologies_list
