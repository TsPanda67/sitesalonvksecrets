# Salon VK Secrets — Site Web

Site vitrine du Salon VK Secrets à Strasbourg Neuhof, réalisé avec [Astro](https://astro.build/) et Tailwind CSS.

## ✨ Fonctionnalités principales
- Présentation élégante du salon, des prestations, nouveautés et tarifs
- Blog (à venir) pour conseils beauté et présentation de produits
- Formulaire de contact sécurisé (Formspree)
- Responsive design (mobile & desktop)
- Accessibilité et SEO optimisés
- Intégration Google Analytics/Search Console (balises prêtes)
- Expérience utilisateur premium (animations, navigation fluide)

## 🚀 Installation & développement

1. **Cloner le dépôt**
   ```sh
   git clone <url-du-depot>
   cd <nom-du-dossier>
   ```
2. **Installer les dépendances**
   ```sh
   npm install
   ```
3. **Lancer le serveur de développement**
   ```sh
   npm run dev
   ```
   Le site sera accessible sur [localhost:4321](http://localhost:4321)

## 🛠️ Déploiement
- Build de production : `npm run build`
- Prévisualisation : `npm run preview`
- Déploiement possible sur Netlify, Vercel, Hostinger, etc.

## 🔒 Sécurité & bonnes pratiques
- **Aucune clé API sensible n’est exposée dans le code** (Formspree utilise un identifiant public).
- Pour toute clé privée/API, utiliser des variables d’environnement côté serveur.
- Ne jamais commiter de fichier `.env` contenant des secrets.

## 📁 Structure du projet

```
/
├── public/
│   └── img/ ... (images, favicon, logo)
├── src/
│   ├── components/ ... (Header, Footer, Hero, etc.)
│   ├── layouts/ ... (Layout.astro)
│   └── pages/ ... (index.astro, prestations.astro, contact.astro, etc.)
├── package.json
└── README.md
```

## 📧 Formulaire de contact
- Utilise [Formspree](https://formspree.io/) pour la réception des messages.
- L’identifiant du formulaire n’est pas une clé secrète.
- Pour plus de sécurité, tu peux utiliser une variable d’environnement publique (voir doc Astro).

## 🖼️ Images & favicon
- Toutes les images sont optimisées (WebP/JPG) et stockées dans `public/img/`.
- Le favicon/logo utilisé est `/img/logo-vksecrets-112.png` (compatible navigateur & Google).

## 📈 SEO & performances
- Balises meta, OpenGraph, favicon, et logo Schema.org intégrés.
- Optimisation LCP (image principale en WebP + width/height).
- Google Fonts préconnectés, scripts non essentiels en defer.
- Pour améliorer encore le score Google PageSpeed, configurer le cache des images côté hébergeur.

## 📄 Mentions légales & CGV
- Voir la page `/mentions-legales` pour les informations légales, CGV, crédits photos, etc.

## 💡 Pour contribuer
- Fork, crée une branche, propose une PR.
- Respecte la structure et l’élégance du code existant.

---

© Salon VK Secrets — Strasbourg Neuhof. Tous droits réservés.
