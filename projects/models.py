from django.db import models


class Project(models.Model):
    """Modèle pour les projets du portfolio"""
    
    class Status(models.TextChoices):
        DRAFT = 'draft', 'Brouillon'
        PUBLISHED = 'published', 'Publié'
        ARCHIVED = 'archived', 'Archivé'
    
    title = models.CharField(max_length=200, verbose_name="Titre")
    slug = models.SlugField(unique=True, verbose_name="URL")
    description = models.TextField(verbose_name="Description")
    long_description = models.TextField(blank=True, verbose_name="Description longue")
    image = models.ImageField(upload_to='projects/', verbose_name="Image principale")
    technologies = models.CharField(max_length=500, help_text="Technologies utilisées (comma-separated)")
    status = models.CharField(max_length=20, choices=Status.choices, default=Status.PUBLISHED)
    
    # URLs et liens
    github_link = models.URLField(blank=True, verbose_name="Lien GitHub")
    demo_link = models.URLField(blank=True, verbose_name="Lien démo")
    
    # Métadonnées
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    order = models.PositiveIntegerField(default=0, help_text="Ordre d'affichage")
    
    class Meta:
        ordering = ['order', '-created_at']
        verbose_name = "Projet"
        verbose_name_plural = "Projets"
    
    def __str__(self):
        return self.title
    
    @property
    def technologies_list(self):
        return [t.strip() for t in self.technologies.split(',')]


class ProjectImage(models.Model):
    """Images supplémentaires pour un projet"""
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='projects/%Y/%m/')
    caption = models.CharField(max_length=200, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        ordering = ['created_at']
    
    def __str__(self):
        return f"{self.project.title} - {self.caption or 'Image'}"
