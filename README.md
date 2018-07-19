# Template HTML/SASS/Gulp

![](https://img.shields.io/badge/Version%20%3A-1.0.0-lightgrey.svg)

## **Sommaire**
  - **Description**
  - **Pré-requis**
  - **Installation**
  - **Commandes**
    - Développement
    - Production
  - **Utilisation**

---

# 1 - DESCRIPTION

Ceci est un Squelette d'application || de site web. 

Il est Constitué : 
  - d'un dossier `Assets`, qui contiendras :

    - vos ressources(images, fonts),

    - les feuilles de Styles et de Script compilés

  - d'un dossier `src`, qui contiendras : 

    - un dossier `styles`, avec à ça racine, un fichier `app.sass`
    qui importeras tout les autres fichiers sass des sous dossiers de `styles` ( C'est ensuite lui que l'ont compileras en `app.css` dans le dossier `assets/css` ),

    - un dossier `js` avec à ça racine, un fichier `app.js`, qui auras la même fonction que le `app.sass` qui seras compilé en `app.js` dans le dossier `assets/js`,

    - puis dans une version du squelette qui va arriver ( fin Juillet 2018 ) , un dossier `task` qui va contenir les tâches Gulp à exécuter

  - d'un dossier `node_modules`, qui seras généré par la commande `npm install` et qui contiendra les packages qui serviront au développement

  - d'un `gulpfile.js` qui sera le fichier du *task runner* Gulp

  - d'un index.html ( inutile de le préciser je pense :D )

  - d'un package.json, qui contiendra le tableau des dépendances à installer.

  ---

  # 2 - PRE-REQUIS

  ## Il vous faudra : 

  - Gulp installé en général ( expliqué dans la partie installation )

  - [NodeJS](www.nodejs.org)

  - S'avoir utiliser SASS, cliquez [ici](https://github.com/Skullyfox/Cour-SASS-Gulp) pour voir mon cour rapide sur les bases de Gulp & SASS

--- 

# 3 - INSTALLATION

## Installer NodeJS

  - Pour Windows allez sur ce lien : [NodeJS](www.nodejs.org)

  - Pour Linux : Suivez les instructions liées à votre distribution : [Installation Linux](https://nodejs.org/en/download/package-manager/)

  - Pour Mac : Comme pour Windows, allez sur le site de [NodeJS](www.nodejs.org)

## Installer Gulp

  - Pour Windows : Ouvrez votre terminal puis entrez la commande
    ```sh
      npm install -g Gulp 
    ```

  - Pour Linux & Mac : Ouvrez votre terminal puis entrez la commande 
    ```sh
      sudo npm install -g Gulp
    ```

## Installer Cross-Env

  - Pour Windows : Ouvrez votre terminal puis entrez la commande
    ```sh
      npm install -g cross-env
    ```

  - Pour Linux & Mac : Ouvrez votre terminal puis entrez la commande
    ```sh
      sudo npm install -g cross-env
    ```


## Installer les dépendances du projet

  - Ouvrez votre terminal, rendez vous dans votre dossier avec la   commande
    ```sh
      cd nomDuDossierCloné/
    ```

  - Entrez ensuite la commande : 
    ```sh
      npm install
    ```

---

# 4 - COMMANDES

  - Commande de développement :
    ```sh
      npm run dev
    ```
    Cette commande va lancer des tasks gulp avec la variable d'environnement `Dev`, ce qui vous permettras d'afficher les changement directement dans votre navigateur en live, à chaque fois qu'un fichier seras changé, la compilation des fichiers du dossier `src` se relancera et le navigateur se rechargera.
  
  - Commande de Production :
    ```sh
      npm run prod
    ```
    Cette commande va lancer des tasks gulp avec la variable d'environnement `Prod`, ce qui va avoir pour effet de : compiler les fichiers de votre dossier `src` mais cette fois-ci, en Minifiant votre JS et votre CSS.

  ## /!\ Attention /!\

  La commande de production, comme son nom l'indique, est une commande de Production et non de développement, il n'y auras aucuns aperçu dans le navigateur ni de Live-Build, c'est une une commande que vous lancerais une fois fini votre site, pour avoir des fichiers JS et CSS moins lourds.

  Si cette commande est exécuté alors que le site n'est pas fini, ne vous en faite pas, au prochain `npm run dev` les fichiers seront remplacé de nouveau car dans les deux cas, les fichiers compilés s'appellent `app.css` et `app.js`.

---

# 5 - UTILISATION

  ## Où dois-je développer en SASS || en SCSS ?

  Le dossier `src/style` est composé d'un fichier `app.sass`, dedans vous y importerez vos fichiers `SASS || SCSS` des autres dossiers. 
  
  - le dossier `Component/` est prévu pour tout ce qui est Navbar / Boutons / Header / Div / Sections etc ...,

  - le dossier `Pages/` est prévu pour les pages ... tout simplement, imaginons, se serais un site OnePage que vous faites, et bien dedans vous y mettrez les paramêtres à appliquer à `body`, hors si c'est un blog à plusieurs pages par exemple, vous pouvez avoir un `Home.sass` `About.sass` etc ...

  - le dossier `Utils/` est prévu pour tout ce qui est "paramétrage", il contient déjà plusieurs fichiers, donc un fichier `Reset.sass`, qui vas réinitialiser les styles des bases de toutes les balises existantes, comme par exemple, les `h1` et les `p` aurons la même taille, se sera à vous de tout configurer, vous êtes libre de le supprimer ou de le garder, il y a le fichier `Colors.sass` pour y mettre les variables d'une palette de couleurs par exemple, un `Font.sass` pour y importer vos font-family, et un `Mixins.sass` pour y mettre vos Mixins.

  Vous êtes libre de modifier totalement l'architecture du dossier `styles/`, cette template est là pour ceux qui le veulent, vous simplifier la vie.

  ## Où dois-je développer en JS ?

  Le dossier `src/js` est composé d'un fichier `app.js`, dedans vous y importerez vos fichiers contenu dans le dossier `Features/`.

  ### Pourquoi ?

  Dans le dossier `Features/` vous pourrez créer autant de fichiers / de dossiers pour compartimenter votre script, dans mon cas, j'aime avoir un fichier JS par Features, et il m'arrive même d'avoir plusieurs fichiers JS par Features, ce qui permet d'avoir des fichiers de script de max 100 lignes, rendant la production + facile et + rapide, ça nous évite de scroll x fois dans un fichier de 999 999 lignes pour modifier une erreur à la ligne 545 852, c'est exagéré mais c'est pour vous imager la chose, à la compilation, vous aurez un fichier JS avec tout à l'intérieur.

  ## Qu'est ce que je j'héberge une fois terminé ?

  C'est très simple, vous n'hébergez que le dossier `assets/` et le fichier `index.html`.