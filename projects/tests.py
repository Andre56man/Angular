from django.test import TestCase
from .models import Project


class ProjectModelTest(TestCase):
    def setUp(self):
        self.project = Project.objects.create(
            title="Test Project",
            slug="test-project",
            description="A test project",
            technologies="Django, Python"
        )
    
    def test_project_creation(self):
        self.assertEqual(self.project.title, "Test Project")
    
    def test_technologies_list(self):
        self.assertEqual(len(self.project.technologies_list), 2)
