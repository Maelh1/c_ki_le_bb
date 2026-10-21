# Direction artistique : la planche contact

```
Idée :       chaque bébé est un tirage photo des années 90 ; le classement est la planche
             contact où le labo entoure au crayon gras les vues à tirer.
Moment fort : le score s'allume sur un afficheur bleu, puis un cercle au crayon gras
             l'entoure (« À tirer ! ») ou une croix le barre (« À jeter »).
Émotion :    la boîte à chaussures pleine de photos qu'on ressort.
Mouvement :  les images se développent, du noir vers l'image ; le crayon se trace.
Capture :    la télé, avec le premier entouré en rouge sur la bande de pellicule.
```

## Couleurs (`theme.css`)

| Rôle | Valeur | Usage |
|---|---|---|
| `--film` | #0F0E0C | fond, la table du labo |
| `--base` | #1D1A16 | bandes de pellicule, panneaux |
| `--print` | #F2EEE5 | papier photo, texte principal |
| `--muted` | #A39B8D | texte secondaire |
| `--glow` | #8FD3FF | l'accent : afficheur bleu façon magnétoscope, boutons |
| `--grease` | #E3342F | crayon gras rouge, uniquement pour les annotations |
| `--tape` | #E4D6B4 | ruban de masquage où l'on écrit les prénoms |

## Typographie

- **Archivo** (Google Fonts), largeur 125 % pour les titres en capitales, normale pour le texte.
- **DSEG7** (jsdelivr, `dseg@0.46.0`) pour tous les chiffres « afficheur ».
- **Caveat** pour l'écriture au feutre et au crayon gras, jamais pour du texte à lire longuement.

## Règles

- Les prénoms à choisir restent en Archivo : la main n'écrit que sur les rubans et les annotations.
- Un seul accent (bleu). Le rouge est réservé au crayon gras.
- Le classement est composé en 1920×1080 puis mis à l'échelle de l'écran.
- Au-delà de 10 joueurs hors podium, les cadres laissent place à une liste en colonnes.
- Sans animation (`prefers-reduced-motion`), tout s'affiche directement dans son état final.
