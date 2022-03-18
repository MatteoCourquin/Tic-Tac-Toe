# L'architecure
Pour ce projet, nous avons utilisé les bases de VueJS. Nous avons choisi de l'utiliser avec un CDN pour se focaliser sur l'apprentissage de ses composants et non pas sur l'architecture du framework.

***
#### Les boucles
Générer ici 9 éléments avec 1 seule ligne de code
```bash
  v-for="i in 9"
```
***
#### Les conditions
Afficher / ou non des éléments en fonctions du gagnant ou de la fin de partie
```bash
  v-if="winner !== '-'
```
***
#### Les refs
Nous permet d'accéder a un éléments depuis le JS facilement

**Depuis le HTML:**
```bash
  :ref="'refCase' + i"
```
**Depuis le JS:**
```bash
  this.$refs.refCase1
```
***
#### Les évenements
Rien de plus simple qu'un :
```bash
 el.addEventListener('click, () => {});
```
mais, coder en VueJS :
```bash
  @click.once
```

Link to project : https://tic-tac-toe-iota-one.vercel.app/