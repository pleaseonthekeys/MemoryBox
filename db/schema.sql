DROP DATABASE IF EXISTS memoryBox;
CREATE DATABASE memoryBox;

USE memoryBox;

CREATE TABLE songs (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    artist VARCHAR(50),
    song_title VARCHAR(20),
    album VARCHAR(50),
    release_date DATE,
    img_url text,
    youtube_url text
);


CREATE TABLE memories (
memory_key VARCHAR(20) NOT NULL PRIMARY KEY,
memory VARCHAR(500)
);

CREATE TABLE song_memory (
song_id INT NOT NULL,
memory_key VARCHAR(20) NOT NULL,
PRIMARY KEY(song_id, memory_key)
);

INSERT INTO memories (memory_key, memory) VALUES('I aint got you','this song reminds me of when I was at Hack Reactor. Every time I sang a little bit of it, Danny had to stop everything he was doing to finish singing that line of that.');
INSERT INTO memories (memory_key, memory) VALUES('karaoke','there was this woman who did an aweful job singing this song at the Boardwalk Bowl Karaoke in Santa Cruz');
INSERT INTO memories (memory_key, memory) VALUES('Jill','My Best friend from high school used to go crazy singing this song while she was driving');
INSERT INTO memories (memory_key, memory) VALUES('Karen','I remember being at a basement party with one of my oldest friends, Karen, singing to this song and cracking up');
INSERT INTO memories (memory_key, memory) VALUES('Lake Tahoe','I would listen to this whole album while skiing at Squaw Valley in Lake Tahoe. I remember just lying in the powder and staring up at the sky, exhausted and delighted');
INSERT INTO memories (memory_key, memory) VALUES('Nate','My friend from college and I learned this song on the piano together. We would play it on the piano in the giant frat house on atherton where he lived');
INSERT INTO memories (memory_key, memory) VALUES('Piano','I would also listen to this song on repeat dozens of times in a row so I learn it on the piano before playing it with Nate');

INSERT INTO songs (artist, song_title, album, release_date, img_url, youtube_url) VALUES('Alicia Keys','If I Aint Got You','The Diary of Alicia Keys','2003-11-20','https://images-na.ssl-images-amazon.com/images/I/815m4ZL21cL._SY355_.jpg','https://www.youtube.com/watch?v=Ju8Hr50Ckwk'),
('Beyonce','Crazy in Love','Dangerously in Love','2003-11-20','https://www.beyoncetribe.it/gallery/wp-content/uploads/2012/01/69597_beyonce.02.01.jpg', 'https://www.youtube.com/watch?v=IrYwp0ujwCs'),
('Blink 182','First Date','Take Off Your Pants and Jacket','2004-11-20','https://www.udiscovermusic.com/wp-content/uploads/2016/10/Blink-182-Take-Off-Your-Pants-And-Jacket-album-cover-02.jpg','https://www.youtube.com/playlist?list=PLS32LpV7cMyMAw5IN8GtbLzbNVH6bgpF9'),
('The Killers','Mr. Brightside','Hot Fuss','2004-11-20','https://www.udiscovermusic.com/wp-content/uploads/2019/06/The-Killers-Hot-Fuss-album-cover-820.jpg','https://www.youtube.com/watch?v=gGdGFtwCNBE'),
('Kanye West','Family Business','The College Dropout','2004-11-20','https://upload.wikimedia.org/wikipedia/en/a/a3/Kanyewest_collegedropout.jpg','https://www.youtube.com/watch?v=JwAjANmjajc'),
('Gorillaz','Dirty Harry','Demon Days','2005-11-20','https://images-na.ssl-images-amazon.com/images/I/71lix6%2BVfWL._SY355_.jpg','https://www.youtube.com/watch?v=cLnkQAeMbIM');

INSERT INTO song_memory (song_id, memory_key) VALUES(1, 'I aint got you');
INSERT INTO song_memory (song_id, memory_key) VALUES(1, 'karaoke');
INSERT INTO song_memory (song_id, memory_key) VALUES(2, 'Jill');
INSERT INTO song_memory (song_id, memory_key) VALUES(3, 'Karen');
INSERT INTO song_memory (song_id, memory_key) VALUES(4, 'Lake Tahoe');
INSERT INTO song_memory (song_id, memory_key) VALUES(5, 'Nate');
INSERT INTO song_memory (song_id, memory_key) VALUES(5, 'Piano');


SELECT s.*, m.*
FROM songs s
INNER JOIN song_memory sm
ON sm.song_id = s.id
INNER JOIN memories m
ON m.memory_key = sm.memory_key;
