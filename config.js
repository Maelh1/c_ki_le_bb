// ─────────────────────────────────────────────────────────────
//  CONFIGURATION DU JEU — c'est le seul fichier à modifier.
// ─────────────────────────────────────────────────────────────

// Un bébé = un prénom + le chemin de sa photo (dans le dossier photos/).
// Nommez les photos avec des numéros (01.jpg, 02.jpg…) et PAS avec le prénom,
// sinon le nom du fichier donne la réponse.
// Vous pouvez en mettre autant que vous voulez (l'affichage s'adapte).
window.BEBES = [
  { prenom: 'Camille',    photo: 'photos/01.jpg' },
  { prenom: 'Thomas',     photo: 'photos/02.jpg' },
  { prenom: 'Léa',        photo: 'photos/03.jpg' },
  { prenom: 'Nicolas',    photo: 'photos/04.jpg' },
  { prenom: 'Julie',      photo: 'photos/05.jpg' },
  { prenom: 'Antoine',    photo: 'photos/06.jpg' },
  { prenom: 'Sarah',      photo: 'photos/07.jpg' },
  { prenom: 'Maxime',     photo: 'photos/08.jpg' },
  { prenom: 'Chloé',      photo: 'photos/09.jpg' },
  { prenom: 'Julien',     photo: 'photos/10.jpg' },
  { prenom: 'Manon',      photo: 'photos/11.jpg' },
  { prenom: 'Romain',     photo: 'photos/12.jpg' },
  { prenom: 'Laura',      photo: 'photos/13.jpg' },
  { prenom: 'Hugo',       photo: 'photos/14.jpg' },
  { prenom: 'Émilie',     photo: 'photos/15.jpg' },
  { prenom: 'Kevin',      photo: 'photos/16.jpg' },
  { prenom: 'Marion',     photo: 'photos/17.jpg' },
  { prenom: 'Alexandre',  photo: 'photos/18.jpg' },
  { prenom: 'Pauline',    photo: 'photos/19.jpg' },
  { prenom: 'Mathieu',    photo: 'photos/20.jpg' },
  { prenom: 'Claire',     photo: 'photos/21.jpg' },
  { prenom: 'Benjamin',   photo: 'photos/22.jpg' },
  { prenom: 'Lucie',      photo: 'photos/23.jpg' },
  { prenom: 'Guillaume',  photo: 'photos/24.jpg' },
  { prenom: 'Inès',       photo: 'photos/25.jpg' },
];

// Canal de partage des scores (service gratuit ntfy.sh, sans compte).
// Gardez ce nom long et aléatoire : quiconque le connaît peut envoyer des scores.
// Pour repartir de zéro (après vos tests), changez-le OU ouvrez scoreboard.html?reset
window.CANAL = 'qui-etait-ce-bebe-b4c87d7a0c8f';

// Change l'ordre d'affichage des photos (même ordre pour tout le monde).
// Mettez n'importe quel autre nombre pour obtenir un autre mélange.
window.MELANGE = 2026;
