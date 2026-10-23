// ─────────────────────────────────────────────────────────────
//  CONFIGURATION DU JEU — c'est le seul fichier à modifier.
// ─────────────────────────────────────────────────────────────

// Un bébé = un prénom + le chemin de sa photo (dans le dossier photos/).
// Nommez les photos avec des numéros (01.jpg, 02.jpg…) et PAS avec le prénom,
// sinon le nom du fichier donne la réponse.
// Vous pouvez en mettre autant que vous voulez (l'affichage s'adapte).
window.BEBES = [
  { prenom: 'Fanny',      photo: 'photos/01.jpg' },
  { prenom: 'Maël',       photo: 'photos/02.jpg' },
  { prenom: 'Éloïse',     photo: 'photos/03.jpg' },
  { prenom: 'Rosa',       photo: 'photos/04.jpg' },
  { prenom: 'Adel',       photo: 'photos/05.jpg' },
  { prenom: 'Nicolas',    photo: 'photos/06.jpg' },
  { prenom: 'Amélie',     photo: 'photos/07.jpg' },
  { prenom: 'Mathilde',   photo: 'photos/08.jpg' },
  { prenom: 'Pierre T.',  photo: 'photos/09.jpg' },
  { prenom: 'Mehdi',      photo: 'photos/10.jpg' },
  { prenom: 'Manon',      photo: 'photos/11.jpg' },
  { prenom: 'Chloé',      photo: 'photos/12.jpg' },
  { prenom: 'Yann',       photo: 'photos/13.jpg' },
  { prenom: 'Valentin',   photo: 'photos/14.jpg' },
  { prenom: 'Pierre I.',  photo: 'photos/15.jpg' },
  { prenom: 'Corentin',   photo: 'photos/16.jpg' },
  { prenom: 'Anaële',     photo: 'photos/17.jpg' },
  { prenom: 'Julie',      photo: 'photos/18.jpg' },
  { prenom: 'Ekim',       photo: 'photos/19.jpg' },
  { prenom: 'Izel',       photo: 'photos/20.jpg' },
  { prenom: 'Julien',     photo: 'photos/21.jpg' },
];

// Canal de partage des scores (service gratuit ntfy.sh, sans compte).
// Gardez ce nom long et aléatoire : quiconque le connaît peut envoyer des scores.
// Pour repartir de zéro (après vos tests), changez-le OU ouvrez scoreboard.html?reset
window.CANAL = 'cest-qui-ce-bebew-705eed1fd5c9';

// Change l'ordre d'affichage des photos (même ordre pour tout le monde).
// Mettez n'importe quel autre nombre pour obtenir un autre mélange.
window.MELANGE = 2026;
