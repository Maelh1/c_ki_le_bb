# Qui était ce bébé ?

Jeu de la crémaillère : chacun associe les photos de bébés aux bons prénoms sur son téléphone,
et le classement s'affiche en direct sur un écran.

- `index.html` : le jeu (sur téléphone)
- `scoreboard.html` : le classement (sur l'ordi / la télé), avec le QR code pour rejoindre
- `config.js` : **le seul fichier à modifier** (prénoms, photos)
- `photos/` : les photos de bébés

Pas de serveur, pas de compte : le site est hébergé par GitHub Pages, et les scores passent
par [ntfy.sh](https://ntfy.sh), un service gratuit de messages.

## 1. Préparer les photos

1. Mettez les photos dans `photos/`, nommées `01.jpg`, `02.jpg`, `03.jpg`…
   (surtout **pas** avec le prénom, sinon le nom du fichier donne la réponse).
2. Format portrait de préférence, et légères (~100 Ko) : sinon le chargement est lent sur les téléphones.
   [squoosh.app](https://squoosh.app) permet de les compresser gratuitement.
   Les photos d'iPhone en `.heic` doivent être converties en `.jpg`.
3. Dans `config.js`, écrivez le bon prénom en face de chaque photo.

L'ordre d'affichage est mélangé automatiquement : la photo 01 n'apparaît pas en premier.

## 2. Mettre en ligne sur GitHub Pages

1. Créez un dépôt **public** sur GitHub (ex. `cremaillere`) et mettez-y le contenu de ce dossier
   (à la racine du dépôt, pas dans un sous-dossier).
2. Dans le dépôt : **Settings → Pages → Build and deployment**
   - Source : *Deploy from a branch*
   - Branch : `main`, dossier `/ (root)` → **Save**
3. Après 1 à 2 minutes, le site est disponible :
   - Jeu : `https://VOTRE-PSEUDO.github.io/cremaillere/`
   - Classement : `https://VOTRE-PSEUDO.github.io/cremaillere/scoreboard.html`

## 3. Le jour J

1. Sur l'ordi branché à la télé, ouvrez `scoreboard.html` en plein écran (touche F11).
   Le QR code pointe automatiquement vers le jeu.
2. Les invités scannent le QR code, jouent, et leur score arrive en direct sur l'écran.

**Après vos tests**, remettez le classement à zéro en ouvrant une fois
`scoreboard.html?reset` sur l'ordi du classement.
(Autre solution : changer le nom du `CANAL` dans `config.js`, ce qui remet aussi à zéro les parties
déjà jouées sur les téléphones.)

Pour voir le classement rempli avec des scores bidons : `scoreboard.html?demo`.

## Bon à savoir

- **Tout est public** : sur un compte GitHub gratuit, le dépôt doit être public pour utiliser Pages.
  Les photos et les prénoms seront visibles par quiconque trouve l'adresse. Si ça gêne quelqu'un,
  ne mettez pas sa photo.
- **Triche possible** : quelqu'un de très motivé peut lire les réponses dans `config.js`.
  Entre amis, on accepte le risque.
- Une partie par téléphone : la partie est mémorisée sur le téléphone (rafraîchir la page ne permet
  pas de rejouer).
- ntfy.sh garde les scores 12 h ; l'écran du classement les garde en plus de son côté,
  donc rien ne se perd pendant la soirée.
- Si le Wi-Fi coupe au moment de valider, le téléphone réessaie tout seul jusqu'à ce que le score parte.
