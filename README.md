# 🐔 Poulet Doré - Site Vitrine

[![Netlify Status](https://api.netlify.com/api/v1/badges/xxxxx/deploy-status)](https://app.netlify.com/sites/poulet-dore/deploys)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> **La qualité au cœur de votre table**  
> Site vitrine statique pour Poulet Doré — vente de poulet frais livré à Dakar, Sénégal.

![Preview](https://via.placeholder.com/1200x600/D4AF37/ffffff?text=Poulet+Doré+-+Preview)

---

## 📋 Table des matières

- [Aperçu](#-aperçu)
- [Technologies](#-technologies)
- [Structure du projet](#-structure-du-projet)
- [Installation](#-installation)
- [Déploiement](#-déploiement)
- [Personnalisation](#-personnalisation)
- [Fonctionnalités](#-fonctionnalités)
- [Contact](#-contact)
- [Licence](#-licence)

---

## 🚀 Aperçu

Site vitrine moderne, responsive et premium pour **Poulet Doré**, entreprise spécialisée dans la vente de poulet de qualité à Dakar.

**Objectifs du site :**
- Présenter la marque et ses produits
- Afficher les tarifs selon le poids
- Permettre aux visiteurs de commander rapidement via WhatsApp
- Renforcer la crédibilité de l'entreprise
- Offrir une expérience utilisateur fluide et professionnelle

**URL de démonstration :** [https://poulet-dore.com](https://poulet-dore.com)

---

## 💻 Technologies

| Technologie | Usage |
|-------------|-------|
| **HTML5** | Structure sémantique du site |
| **CSS3** | Styles, animations, responsive design |
| **JavaScript (Vanilla)** | Dark mode, menu mobile, animations au scroll |
| **Font Awesome 6** | Icônes (réseaux sociaux, interface) |
| **Google Fonts** | Polices Playfair Display & Inter |
| **Google Maps** | Carte de localisation intégrée |

✅ **Aucune dépendance, aucun build, aucun framework.**  
✅ **Site 100% statique, déployable partout.**

---

## 📁 Structure du projet
poulet-dore/
├── index.html # Page unique du site
├── css/
│ └── style.css # Styles complets (responsive, dark mode, animations)
├── js/
│ └── main.js # Scripts (menu, thème, animations, scroll)
├── images/
│ ├── logo.png # Logo de l'entreprise
│ ├── banniere.jpg # Image de fond du hero
│ ├── poulet-vivant.jpg # Image produit
│ ├── poulet-pret-a-cuire.jpg
│ ├── livraison.jpg
│ └── vente-en-gros.jpg
├── README.md # Documentation du projet
└── LICENCE # Licence MIT

text

---

## 🔧 Installation

### En local

1. **Cloner le projet :**
```bash
git clone https://github.com/votre-username/poulet-dore.git
cd poulet-dore
Ouvrir le site :

Double-cliquez sur index.html

Ou utilisez un serveur local :

bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js (npx)
npx serve .

# Avec VS Code Live Server
# Clic droit sur index.html → "Open with Live Server"
Le site est accessible sur :

http://localhost:8000 (ou le port indiqué)

🌐 Déploiement
Option 1 : Netlify (recommandé)
https://www.netlify.com/img/deploy/button.svg

Créez un compte sur Netlify

Glissez-déposez le dossier poulet-dore/ dans l'interface

Ou connectez votre dépôt Git pour le déploiement continu

Configurez le domaine personnalisé si nécessaire

Aucune configuration de build n'est nécessaire.

Option 2 : Vercel
https://vercel.com/button

Créez un compte sur Vercel

Importez le dossier du projet

Laissez les paramètres par défaut

Déployez

Option 3 : GitHub Pages
Créez un dépôt GitHub

Poussez le projet

Allez dans Settings → Pages

Sélectionnez la branche main et le dossier / (root)

Le site sera publié sur https://votre-username.github.io/poulet-dore/

🎨 Personnalisation
Modifier les couleurs
Dans css/style.css, les couleurs principales sont définies dans les variables CSS :root :

css
:root {
    --gold: #D4AF37;        /* Couleur principale */
    --gold-light: #E8C84A;  /* Doré clair */
    --gold-dark: #B8942E;   /* Doré foncé */
    --cream: #F8F7F3;       /* Fond clair */
    --dark-bg: #0a0a0a;     /* Fond sombre */
}
Modifier les textes et liens WhatsApp
Dans index.html, cherchez les liens https://wa.me/221761850104 et remplacez :

221761850104 par votre numéro WhatsApp (avec l'indicatif pays, sans le +)

Le message pré-rempli dans le paramètre ?text=...

Modifier les tarifs
Dans index.html, section #pricing, modifiez :

Les titres (<h3>1,4 kg – 1,5 kg</h3>)

Les prix (<div class="price">3 000 <span>FCFA</span></div>)

Les messages WhatsApp dans les boutons

Ajouter vos images
Placez vos images dans le dossier images/ :

logo.png → Logo de l'entreprise

banniere.jpg → Image de fond du hero (résolution recommandée : 1920×1080px)

poulet-vivant.jpg → Image produit

poulet-pret-a-cuire.jpg → Image produit

livraison.jpg → Image livraison

vente-en-gros.jpg → Image vente en gros

Modifier la carte Google Maps
Allez sur Google Maps

Recherchez votre adresse

Cliquez sur "Partager" → "Intégrer une carte"

Copiez le code <iframe>

Remplacez le src de l'iframe dans la section Contact

✨ Fonctionnalités
Actuelles
✅ Design premium moderne

✅ Responsive mobile-first

✅ Dark mode avec persistance (localStorage)

✅ Animations fluides au scroll (Intersection Observer)

✅ Menu burger mobile avec animation

✅ Bouton WhatsApp flottant avec pulse

✅ Messages WhatsApp pré-remplis par produit

✅ Section tarifs avec carte "populaire" mise en avant

✅ Carte Google Maps intégrée

✅ SEO de base (meta tags, Open Graph, Twitter Card)

✅ Icônes Font Awesome

✅ Polices Google Fonts (Playfair Display + Inter)

✅ Scrollbar personnalisée

✅ Effets hover avancés sur les cartes

✅ Header sticky avec effet blur

✅ Dégradés subtils par section

✅ Lazy loading des images

✅ Compatible tous navigateurs modernes

Futures améliorations possibles
Formulaire de contact fonctionnel

Galerie photos produits

Témoignages clients

Blog / Actualités

FAQ

Multilingue (français / anglais / wolof)

Système de réservation

Paiement en ligne

📱 Responsive Design
Appareil	Breakpoint	Comportement
Mobile	< 480px	1 colonne, menu burger, texte réduit
Tablette	480px - 1024px	2 colonnes, navigation visible
Desktop	> 1024px	3-4 colonnes, navigation horizontale
🎯 SEO
Le site inclut les balises meta essentielles pour le référencement :

html
<meta name="description" content="...">
<meta name="keywords" content="...">
<meta property="og:title" content="...">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
<meta name="twitter:card" content="...">
Pour améliorer le SEO :

Ajoutez un fichier sitemap.xml

Ajoutez un fichier robots.txt

Configurez Google Search Console

Ajoutez des données structurées (JSON-LD) pour l'entreprise locale

🖼️ Captures d'écran
Light Mode	Dark Mode
https://via.placeholder.com/400x300/F8F7F3/111111?text=Light+Mode	https://via.placeholder.com/400x300/0a0a0a/ffffff?text=Dark+Mode
📞 Contact
Poulet Doré

📍 Dakar — Sénégal

📱 WhatsApp : +221 76 185 01 04

📱 Téléphone : +221 77 592 37 06

📧 Email : pouletdore1@gmail.com

Développeur

📸 Instagram : @p_oumar_s

📄 Licence
Ce projet est sous licence MIT. Vous êtes libre de l'utiliser, le modifier et le distribuer.

Voir le fichier LICENCE pour plus de détails.

⭐ Remerciements
Font Awesome pour les icônes

Google Fonts pour les polices

Google Maps pour la carte

Développé avec ❤️ par @p_oumar_s
© 2026 Poulet Doré. Tous droits réservés.

text

---

