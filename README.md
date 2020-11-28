# Hackathon
Site web pour la gestion d'un hackathon


## Role du projet 

Permettre à des membres de s'insrcrire à hackathon. Chaque projet est constitué au minimun d'un membre et au maximun de 5.
Chaque projet est rattaché à une école. Seul le responsable de celle-ci (utilisateur), pourra s'identifier pour y voir les membres et détails.

## Liste des actions 
- Créer une école.
- Créer un utilisateur qui est attaché à une école. Si l'école n'exsite pas , elle pourra etre créer sur la meme page
- Créer un projet qui est en lien avec une école.
- Créer un membre et le rattacher à un projet. Si le project est inexsistant, il pourra etre créer sur la meme page.
- L'utilisateur pourra se connecter pour accéder au projet rataché à son école. Il pourra en voir les détails et les membres.

## Descrition technique

Le projet est codé en html, javascript et css. Il est dockerisé.
Pour lancer le projet 
```
docker-compose build
docker-compose up 
```

Il est accessible à l'adresse suivante : http://localhost:8081

Le port peut etre changé dans le ficher docker-compose.yml. Il faudra par conséquent modifier le nginx.conf

## Docker

- Stopper container ``` docker-compose stop ```
- Redémarrer container ``` docker-compose restart ```
- Eteindre container ``` docker-compose down ```

