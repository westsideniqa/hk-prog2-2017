# Node.js | Express.js | MongoDB
## Programmeerimine II | 2017

Iga loengu teemad paigutan eraldi branchidesse ning branchi siseselt proovin commit-ida samm-sammult, et oleks hea jälgida.

#### Viited kursusel kasutatavatest tehnoloogiatest, raamistikest ja teekidest:
* [Node.js](https://nodejs.org)
* [Express.js](https://expressjs.com/)
#### Kursust toetav videomaterjal: 
* [Node.js & Express From Scratch](https://www.youtube.com/playlist?list=PLillGF-RfqbYRpji8t4SxUkMxfowG4Kqp)


### Loeng 1
Esimeses loengu sisu oli Node.js baasil veebiserveri loomine Express.js baasil, kasutades template engineit 'EJS'.
loeng1 branchi kood ei ole täpselt vastavuses sellega, mis loengus kirjutasime. Teemad on samad, aga lisasin juurde controllerid, mis töötavad `express.Router` kaudu.

Lisaks sellele tegin juurde ka ühe sisulehe, mis kasutab Node enda native moodulit 'os', mille kaudu pärime välja infot serveri OS-i ja riistvara kohta.

Osaliselt kommenteerisin ka koodi. Commit-idest saate jälgida samm-sammult muudatusi.

* [Express.js template engines](https://expressjs.com/en/guide/using-template-engines.html)
* [Express.js static files](https://expressjs.com/en/starter/static-files.html)
* [Node.js OS Module](https://nodejs.org/dist/latest-v8.x/docs/api/os.html)


### Installeerimine & käivitus
Kui tahta ainult kindlat branchi kloonida, siis on git clone käsk: `git clone -b <branchi-nimi> git@github.com:jaankoppe/hk-prog2-2017.git`
```
git clone git@github.com:jaankoppe/hk-prog2-2017.git
cd hk-prog2-2017
npm install
node server.js
```
Mine URL-ile: `http://localhost:3000`