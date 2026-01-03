# Modèles de Données

Ce dossier contient tous les modèles TypeScript (interfaces) pour les composants du portfolio.

## Structure

- `about.model.ts` - Modèle pour la section À propos
- `introduction.model.ts` - Modèle pour la section d'introduction/accueil
- `service.model.ts` - Modèle pour les services
- `portfolio.model.ts` - Modèle pour les projets du portfolio
- `resume.model.ts` - Modèle pour le CV/Resume
- `testimonial.model.ts` - Modèle pour les témoignages
- `contact.model.ts` - Modèle pour la section contact
- `blog.model.ts` - Modèle pour les articles de blog
- `video.model.ts` - Modèle pour la section vidéo
- `section.model.ts` - Modèle générique pour les sections
- `index.ts` - Export centralisé de tous les modèles

## Utilisation

Pour modifier les données de votre portfolio, modifiez les fichiers dans le dossier `../data/portfolio.data.ts`.

## Exemple

```typescript
import { About } from './models';

const aboutData: About = {
  title: "Qui suis-je",
  subtitle: "À propos",
  description: "Apprenez à me connaître",
  info: {
    fullName: "Votre Nom",
    age: "30 ans",
    // ...
  }
};
```


