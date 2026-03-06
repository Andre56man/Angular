from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Project, ProjectImage
from .serializers import ProjectSerializer, ProjectImageSerializer


class ProjectViewSet(viewsets.ModelViewSet):
    """API ViewSet pour les projets"""
    queryset = Project.objects.filter(status='published')
    serializer_class = ProjectSerializer
    lookup_field = 'slug'
    
    def get_queryset(self):
        queryset = super().get_queryset()
        
        # Filtrer par technologie
        tech = self.request.query_params.get('technology')
        if tech:
            queryset = queryset.filter(technologies__icontains=tech)
        
        return queryset.order_by('order', '-created_at')
    
    @action(detail=False, methods=['get'])
    def featured(self, request):
        """Récupère les projets en vedette"""
        projects = self.get_queryset()[:3]
        serializer = self.get_serializer(projects, many=True)
        return Response(serializer.data)
    
    @action(detail=True, methods=['post'])
    def add_image(self, request, slug=None):
        """Ajoute une image à un projet"""
        project = self.get_object()
        serializer = ProjectImageSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(project=project)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
