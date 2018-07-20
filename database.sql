CREATE TABLE person (
id SERIAL PRIMARY KEY,
username VARCHAR(20) NOT NULL UNIQUE,
password VARCHAR NOT NULL
);

CREATE TABLE charlist (
id SERIAL PRIMARY KEY,
username VARCHAR(20) NOT NULL,
charname VARCHAR(20) NOT NULL,
strength int,
dexterity int,
intelligence int,
faith int
);

CREATE TABLE category (
	id SERIAL PRIMARY KEY,
	wepcat VARCHAR(20)
);

INSERT INTO category (wepcat) VALUES ('gauntlet'), ('dagger'), ('straight-sword'), ('greatsword'), ('ultra-greatsword'), ('thrusting-sword'), ('curved-sword'), ('curved-greatsword'), ('katana'), ('axe'), ('greataxe'), ('hammer'), ('great-hammer'), ('spear'), ('halberd'), ('whip');

CREATE TABLE weapon (
	id SERIAL PRIMARY KEY,
	wepname VARCHAR(40),
	physdmg int,
	magicdmg int,
	firedmg int,
	ltngdmg int,
	strreq int,
	dexreq int,
	intreq int,
	faithreq int,
	strscale int,
	dexscale int,
	intscale int,
	faithscale int,
	cat_id int REFERENCES category ON DELETE CASCADE
);

CREATE TABLE strdex (
	id SERIAL PRIMARY KEY,
	lvl int,
	base int,
	inc float
);

INSERT INTO strdex ( lvl, base, inc ) VALUES ( 10, 5, 3.5 ), ( 20, 40, 2.25 ), ( 40, 85, 0.25 );

CREATE TABLE intfaith (
	id SERIAL PRIMARY KEY,
	lvl int,
	base int,
	inc float
);

INSERT INTO intfaith ( lvl, base, inc ) VALUES ( 10, 5, 2.25 ), ( 30, 50, 1.5 ), ( 50, 80, 20.0/49.0 );

--Gauntlets

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Caestus', 66, 0, 0, 0, 5, 8, 0, 0, 51, 51, 0, 0, 1 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Claw', 72, 0, 0, 0, 6, 14, 0, 0, 13, 85, 0, 0, 1 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Dragon Bone Fist', 95, 0, 0, 0, 20, 0, 0, 0, 120, 0, 0, 0, 1 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Dark Hand', 200, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1 );


--Daggers

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Dagger', 56, 0, 0, 0, 5, 8, 0, 0, 13, 85, 0, 0, 2 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Parrying Dagger', 54, 0, 0, 0, 5, 14, 0, 0, 13, 85, 0, 0, 2 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Bandit''s Knife', 56, 0, 0, 0, 6, 12, 0, 0, 13, 85, 0, 0, 2 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Ghost Blade', 110, 0, 0, 0, 5, 0, 0, 0, 12, 0, 0, 0, 2 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Priscilla''s Dagger', 80, 0, 0, 0, 6, 20, 0, 0, 0, 122, 0, 0, 2 );

--Straight Swords

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Shortsword', 78, 0, 0, 0, 8, 10, 0, 0, 51, 51, 0, 0, 3 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Longsword', 80, 0, 0, 0, 10, 10, 0, 0, 51, 51, 0, 0, 3 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Broadsword', 82, 0, 0, 0, 10, 10, 0, 0, 51, 51, 0, 0, 3 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Balder Side Sword', 80, 0, 0, 0, 10, 14, 0, 0, 13, 85, 0, 0, 3 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Sunlight Straight Sword', 82, 0, 0, 0, 12, 12, 0, 0, 51, 51, 0, 0, 3 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Darksword', 82, 0, 0, 0, 16, 16, 0, 0, 51, 51, 0, 0, 3 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Barbed Straight Sword', 80, 0, 0, 0, 10, 10, 0, 0, 38, 50, 0, 0, 3 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Silver Knight Straight Sword', 175, 0, 0, 0, 16, 22, 0, 0, 8, 52, 0, 0, 3 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Astora''s Straight Sword', 80, 80, 0, 0, 10, 10, 0, 14, 51, 51, 0, 51, 3 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Drake Sword', 200, 0, 0, 0, 16, 10, 0, 0, 0, 0, 0, 0, 3 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Broken Straight Sword', 40, 0, 0, 0, 8, 8, 0, 0, 38, 50, 0, 0, 3 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Straight Sword Hilt', 20, 0, 0, 0, 6, 6, 0, 0, 8, 7, 0, 0, 3 );

--Greatswords

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Bastard Sword', 105, 0, 0, 0, 16, 10, 0, 0, 51, 51, 0, 0, 4 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Claymore', 103, 0, 0, 0, 16, 10, 0, 0, 51, 51, 0, 0, 4 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Man-Serpent Greatsword', 110, 0, 0, 0, 24, 0, 0, 0, 88, 0, 0, 0, 4 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Flamberge', 100, 0, 0, 0, 16, 14, 0, 0, 22, 70, 0, 0, 4 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Crystal Greatsword', 190, 0, 0, 0, 20, 10, 0, 0, 58, 52, 0, 0, 4 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Black Knight Sword', 220, 0, 0, 0, 20, 18, 0, 0, 58, 7, 0, 0, 4 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Stone Greatsword', 148, 100, 0, 0, 40, 10, 0, 0, 60, 55, 15, 0, 4 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Greatsword of Artorias (Cursed)', 178, 0, 0, 0, 24, 18, 18, 18, 60, 60, 60, 60, 4 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Greatsword of Artorias', 120, 85, 0, 0, 24, 18, 20, 20, 55, 55, 85, 85, 4 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Great Lord Sword', 256, 0, 0, 0, 20, 10, 0, 0, 23, 24, 0, 0, 4 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Moonlight Greatsword', 0, 132, 0, 0, 16, 10, 28, 0, 0, 0, 136, 0, 4 );

--Ultra-Greatswords

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Greatsword', 130, 0, 0, 0, 28, 10, 0, 0, 60, 26, 0, 0, 5 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Zweihander', 130, 0, 0, 0, 24, 10, 0, 0, 60, 26, 0, 0, 5 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Demon Great Machete', 133, 0, 0, 0, 40, 0, 0, 0, 90, 0, 0, 0, 5 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Black Knight Greatsword', 220, 0, 0, 0, 32, 18, 0, 0, 90, 5, 0, 0, 5 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Dragon Greatsword', 390, 0, 0, 0, 50, 10, 0, 0, 60, 26, 0, 0, 5 );

--Thrusting Swords

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Mail Breaker', 57, 0, 0, 0, 5, 12, 0, 0, 22, 70, 0, 0, 6 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Rapier', 73, 0, 0, 0, 10, 12, 0, 0, 22, 70, 0, 0, 6 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Estoc', 75, 0, 0, 0, 5, 12, 0, 0, 22, 70, 0, 0, 6 );


INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Ricard''s Rapier', 70, 0, 0, 0, 8, 20, 0, 0, 6, 85, 0, 0, 6 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Velka''s Rapier', 62, 104, 0, 0, 8, 16, 16, 0, 5, 53, 97, 0, 6 );

--Curved Swords

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Scimitar', 80, 0, 0, 0, 7, 13, 0, 0, 13, 85, 0, 0, 7 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Falchion', 82, 0, 0, 0, 9, 13, 0, 0, 13, 85, 0, 0, 7 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Shotel', 82, 0, 0, 0, 9, 14, 0, 0, 15, 72, 0, 0, 7 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Painting Guardian Sword', 76, 0, 0, 0, 7, 20, 0, 0, 9, 109, 0, 0, 7 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Jagged Ghost Blade', 155, 0, 0, 0, 7, 0, 0, 0, 13, 0, 0, 0, 7 );

--Curved Greatswords

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Murakumo', 113, 0, 0, 0, 28, 13, 0, 0, 13, 85, 0, 0, 8 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Server', 107, 0, 0, 0, 24, 13, 0, 0, 15, 72, 0, 0, 8 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Gravelord Sword', 265, 0, 0, 0, 24, 13, 0, 0, 13, 13, 0, 0, 8 );

--Katanas

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Uchigatana', 80, 0, 0, 0, 7, 13, 0, 0, 13, 85, 0, 0, 9 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Iaito', 88, 0, 0, 0, 14, 20, 0, 0, 0, 85, 0, 0, 9 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Washing Pole', 90, 0, 0, 0, 20, 16, 0, 0, 38, 50, 0, 0, 9 );

--Axes

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Hand Axe', 80, 0, 0, 0, 8, 8, 0, 0, 60, 30, 0, 0, 10 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Battle Axe', 95, 0, 0, 0, 12, 8, 0, 0, 60, 30, 0, 0, 10 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Butcher Knife', 90, 0, 0, 0, 24, 0, 0, 0, 88, 0, 0, 0, 10 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Gargoyle Tail Axe', 93, 0, 0, 0, 14, 14, 0, 0, 22, 70, 0, 0, 10 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Crescent Axe', 115, 115, 0, 0, 18, 12, 0, 16, 24, 21, 0, 82, 10 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Golem Axe', 170, 0, 0, 0, 36, 8, 0, 0, 74, 16, 0, 0, 10 );

--Greataxes

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Greataxe', 140, 0, 0, 0, 32, 8, 0, 0, 68, 11, 0, 0, 11 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Demon''s Greataxe', 114, 0, 0, 0, 46, 0, 0, 0, 125, 0, 0, 0, 11 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Black Knight Greataxe', 229, 0, 0, 0, 36, 18, 0, 0, 90, 4, 0, 0, 11 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Dragon King Greataxe', 380, 0, 0, 0, 50, 8, 0, 0, 0, 0, 0, 0, 11 );

--Hammers

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Club', 87, 0, 0, 0, 10, 0, 0, 0, 110, 0, 0, 0, 12 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Reinforced Club', 97, 0, 0, 0, 12, 0, 0, 0, 75, 0, 0, 0, 12 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Blacksmith Giant Hammer', 120, 0, 0, 0, 16, 0, 0, 0, 35, 0, 0, 0, 12 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Mace', 91, 0, 0, 0, 12, 0, 0, 0, 88, 0, 0, 0, 12 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Morning Star', 83, 0, 0, 0, 11, 0, 0, 0, 75, 0, 0, 0, 12 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Warpick', 91, 0, 0, 0, 11, 10, 0, 0, 60, 30, 0, 0, 12 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Pickaxe', 89, 0, 0, 0, 14, 0, 0, 0, 88, 0, 0, 0, 12 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Blacksmith Hammer', 87, 0, 0, 0, 14, 0, 0, 0, 75, 0, 0, 0, 12 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Hammer of Vamos', 115, 0, 0, 0, 14, 0, 0, 0, 75, 0, 0, 0, 12 );

--Great Hammers

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Large Club', 120, 0, 0, 0, 26, 0, 0, 0, 103, 0, 0, 0, 13 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Great Club', 135, 0, 0, 0, 28, 0, 0, 0, 88, 0, 0, 0, 13 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Demon''s Great Hammer', 138, 0, 0, 0, 46, 0, 0, 0, 81, 0, 0, 0, 13 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Grant', 130, 130, 0, 0, 50, 0, 0, 30, 84, 0, 0, 116, 13 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Dragon Tooth', 290, 0, 0, 0, 40, 0, 0, 0, 35, 0, 0, 0, 13 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Smough''s Hammer', 300, 0, 0, 0, 58, 0, 0, 0, 50, 0, 0, 0, 13 );

--Spears

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Spear', 80, 0, 0, 0, 11, 10, 0, 0, 22, 70, 0, 0, 14 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Winged Spear', 86, 0, 0, 0, 13, 15, 0, 0, 15, 72, 0, 0, 14 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Partizan', 80, 0, 0, 0, 13, 12, 0, 0, 22, 70, 0, 0, 14 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Pike', 86, 0, 0, 0, 24, 10, 0, 0, 22, 70, 0, 0, 14 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Channeler''s Trident', 70, 115, 0, 0, 16, 16, 24, 0, 11, 55, 88, 0, 14 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Demon''s Spear', 100, 0, 0, 120, 12, 10, 0, 0, 60, 60, 0, 0, 14 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Silver Knight Spear', 163, 0, 0, 0, 16, 22, 0, 0, 4, 60, 0, 0, 14 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Moonlight Butterfly Horn', 0, 120, 0, 0, 12, 0, 14, 0, 0, 0, 100, 0, 14 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Dragonslayer Spear', 95, 0, 0, 65, 24, 24, 0, 0, 60, 100, 0, 100, 14 );

--Halberds

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Halberd', 110, 0, 0, 0, 16, 12, 0, 0, 38, 50, 0, 0, 15 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Lucerne', 110, 0, 0, 0, 15, 12, 0, 0, 38, 50, 0, 0, 15 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Scythe', 110, 0, 0, 0, 14, 12, 0, 0, 15, 72, 0, 0, 15 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Gargoyle''s Halberd', 115, 0, 0, 0, 16, 12, 0, 0, 39, 40, 0, 0, 15 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Giant''s Halberd', 140, 0, 0, 0, 36, 12, 0, 0, 38, 50, 0, 0, 15 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Titanite Catch Pole', 125, 145, 0, 0, 16, 14, 0, 0, 25, 45, 40, 0, 15 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Black Knight Halberd', 245, 0, 0, 0, 32, 18, 0, 0, 44, 2, 0, 0, 15 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Great Scythe', 100, 0, 0, 0, 14, 14, 0, 0, 13, 85, 0, 0, 15 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Lifehunt Scythe', 180, 0, 0, 0, 16, 14, 0, 0, 8, 94, 0, 0, 15 );

--Whips

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Whip', 80, 0, 0, 0, 7, 14, 0, 0, 0, 85, 0, 0, 16 );

INSERT INTO weapon ( wepname, physdmg, magicdmg, firedmg, ltngdmg, strreq, dexreq, intreq, faithreq, strscale, dexscale, intscale, faithscale, cat_id ) VALUES ( 'Notched Whip', 76, 0, 0, 0, 8, 16, 0, 0, 0, 85, 0, 0, 16 );

UPDATE charlist SET charname='charlie', strength=99, dexterity=99,
  intelligence=99, faith=99 WHERE id=25;
