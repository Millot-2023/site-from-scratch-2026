# Consignes de Développement - Christophe Millot

## 1. Architecture CSS & Séparatisme
* **_layout-general.scss** : Seul maître de la structure globale (`.container`), du rythme vertical (`padding-top: 80px`) et de l'aspect des blocs gris (`background`, `border-radius`).
* **Fichiers spécifiques (`_technos.scss`, `grid.scss`, etc.)** : Interdiction stricte de redéfinir `.container` ou de limiter les largeurs (`max-width`). Ils ne gèrent que la disposition interne (colonnes, gap, styles d'items).
* **Priorité à la Robustesse** : Préférer le CSS (Grid/Flexbox) au SVG pour les éléments architecturaux (briques, tuiles).

## 2. Harmonisation Visuelle
* **Largeur standard** : 1200px (Gouttières : 50px desktop / 20px mobile).
* **Blocs de section** : Fond gris `#f9f9f9`, arrondi `8px`, padding interne `40px` (sauf Portfolio qui est transparent sans padding interne pour l'alignement).
* **Navbar** : Pas de changement de background au survol en production. Privilégier un soulignement discret (Desktop uniquement).

## 3. Workflow & Sécurité
* **Intégrité** : Ne jamais envoyer de fragments de code, toujours des fichiers complets.
* **Validation** : Demander l'accord de Christophe avant tout changement de couleurs, de classes ou d'organisation de fichiers.
* **Git** : Suivre la procédure de push après chaque stabilisation de structure.# Consignes de Développement - Christophe Millot

## 1. Architecture CSS & Séparatisme
* **_layout-general.scss** : Seul maître de la structure globale (`.container`), du rythme vertical (`padding-top: 80px`) et de l'aspect des blocs gris (`background`, `border-radius`).
* **Fichiers spécifiques (`_technos.scss`, `grid.scss`, etc.)** : Interdiction stricte de redéfinir `.container` ou de limiter les largeurs (`max-width`). Ils ne gèrent que la disposition interne (colonnes, gap, styles d'items).
* **Priorité à la Robustesse** : Préférer le CSS (Grid/Flexbox) au SVG pour les éléments architecturaux (briques, tuiles).

## 2. Harmonisation Visuelle
* **Largeur standard** : 1200px (Gouttières : 50px desktop / 20px mobile).
* **Blocs de section** : Fond gris `#f9f9f9`, arrondi `8px`, padding interne `40px` (sauf Portfolio qui est transparent sans padding interne pour l'alignement).
* **Navbar** : Pas de changement de background au survol en production. Privilégier un soulignement discret (Desktop uniquement).

## 3. Workflow & Sécurité
* **Intégrité** : Ne jamais envoyer de fragments de code, toujours des fichiers complets.
* **Validation** : Demander l'accord de Christophe avant tout changement de couleurs, de classes ou d'organisation de fichiers.
* **Git** : Suivre la procédure de push après chaque stabilisation de structure.