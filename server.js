const express = require('express'); // Lisame express mooduli, selle abil loome Node.js baasil veebiserveri
/**
 * express rakenduse konstant, mille kaudu saame ligi veebiserverile
*/
const app = express();

/**
 * Määrame "view engine -i"
 * Nagu näha package.json failist, siis peame installeerima selleks "EJS" mooduli,
 * kuid serverisse ei pea seda lisama ( require() ), express oskab seda ise automaatselt kasutada
*/
app.set('view engine', 'ejs');

/**
 * Staatiliste failide jagamine.
 * Vaikimisi ei ole Express serveri puhul ühtegi avalikku asukohta.
 * Selleks et jagada staatilist sisu välja poole, peame ära määrama asukohta
 * Antud juhul määrame asukohaks projektis oleva "public" kataloogi.
 * Nüüd kui meil on public kataloogis "css" kataloog, kus on "style.css",
 * siis saame selle kätte localhost:3000/css/style.css
 *
 * Lisainfo: https://expressjs.com/en/starter/static-files.html
*/

app.use(express.static('public'));

/**
 * Port, mida expressi veebiserver kasutab
*/
const PORT = 3000;  

/**
 * 
 * Rakendus kuulab GET päringut asukohta "/",
 * kus esimene parameeter on relatiivne asukoht serveri mõistes
 * ehk kui veebiserver on localhost:3000, siis app.get('/asukoht') oleks localhost:3000/asukoht.
*/
app.get('/', (req, res) => {
    /**
     * Vaate "renderdamine", ehk parsitakse EJS süntaks HTML-iks kokku
     * ning saadetakse kliendile, kes selle päringu teostas (ehk kes sellele URL-ile läks)
    */
    res.render('pages/index');
});

app.listen(PORT, () => {
    /**
     * "Template literals" on ES2015 omadus, mis lubab kasutada "string" -i sees javascripti.
     * NB! - kasutatakse "back-tick" -i (``), mitte tavalisi ühe- ega kahekordseid jutumärke ('', "")
     * Lisainfo: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    */
    console.log(`Listening on port ${PORT}`);
});