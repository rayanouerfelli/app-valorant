API VALORANT
=======
Telechargement de **NODE-JS** pour notre application.
>Node (ou plus formellement Node. js) est un environnement d'exécution open-source, multi-plateforme, qui permet aux développeuses et développeurs de créer toutes sortes d'applications et d'outils côté serveur en JavaScript.

Création de notre page html avec les liaison
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="assets/css/styles.css">
    <script type="module" src="./assets/js/script.js" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    <title>SkinValorant</title>
</head>
</html>
```
Dans mon JS
---
Je crée tout d'abord ma div  qui vas contenir mes la majeur partie de mon code.


Je crée une constant avec la quel j'associe mon api
 
```js
const urlskin = 'https://valorant-api.com/v1/weapons/skinchromas';
```
Je crée une nouvel **div** (tableau1) pour y mettre tous mes element dans ma div main 
elle contiendrat mon selecet, et les images de m'as premiere api.

```js
let tableau1 = document.createElement('div');
    tableau1.classList.add('tableau1');
    main.appendChild(tableau1);
```
Pour recuperer les donées de l'apis nous allons utiliser la **methode fetch**. 
``` js
let dataFetch;
    getlesSkinArmes();


async function getlesSkinArmes() {
    const res = await fetch(urlskin);
    dataFetch = await res.json();
//création d'un element select pour les skin   
let selectUnskin = document.createElement('select');
    selectUnskin.classList.add('select');
//création d'une option de plus 
let optionUnskin = document.createElement('option');
    optionUnskin.innerText = 'CHOISI UN SKIN' ;
    selectUnskin.appendChild(optionUnskin);
    tableau1.appendChild(selectUnskin);

dataFetch.data.forEach(unskin => {
    let skin = document.createElement('option');
    skin.textContent = unskin.displayName;
    selectUnskin.appendChild(skin);
});
```