drop database if exists gestion_recettes;
create database if not exists gestion_recettes;

use gestion_recettes;

create table recettes(
   id int auto_increment,
   titre varchar(100) not null,
   ingredients text not null,
   type varchar(50) not null,
   constraint pk_recette primary key(id),
   constraint ck_type check(type = 'Entrée' or type = 'Dessert' or type = 'Plat')
);

INSERT INTO recettes (titre, ingredients, type)
VALUES
    ('Salade César', 'laitue romaine, poulet grillé, parmesan, croûtons, sauce César', 'Entrée'),
    ('Gâteau au chocolat', 'chocolat noir, sucre, œufs, farine, levure', 'Dessert');