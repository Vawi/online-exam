#Online Exam 

Application web permettant de creer et supprimer une liste d'examen.
Le backend est écrit en python à l'aide de Flask et la partie front fonctionne grace a Angular

Cette application est basé sur le tuto présent ici : https://auth0.com/blog/using-python-flask-and-angular-to-build-modern-apps-part-1/

La partie backend est sécurisé a l'aide de auth0.

pour lancer le projet il faut : 

lancer la partie backend en se placant dans le dossier "backend" et utiliser la commande :

    ./bootstrap.sh 

Cette commande initialisera le service

Ensuite il faut lancer l'application angular en ce plaçant dans la partie frontend.
Il suffira d'utiliser la commande : 

    ng serve

L'application devrait être lancée sur le port 4200