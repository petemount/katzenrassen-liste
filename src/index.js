import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CatListing from './Listing';
import bild1 from "./bilder/bild1.jpg";
import bild2 from "./bilder/bild2.jpg";
import bild3 from "./bilder/bild3.jpg";
import bild4 from "./bilder/bild4.jpg";
import bild5 from "./bilder/bild5.jpg";
import bild6 from "./bilder/bild6.jpg";
import bild7 from "./bilder/bild7.jpeg";
import bild8 from "./bilder/bild8.jpg";
import bild9 from "./bilder/bild9.jpg";
import bild10 from "./bilder/bild10.jpg";



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <div id="kopfzeile"> <h1>Eine kleine Auswahl von Rassekatzen</h1>
    <div className='container'>
    <CatListing
      Name={"Abyssinian"}
      Preis={"800"}
      bildNr={bild1}
    />
    <CatListing
      Name={"Devon-Rex"}
      Preis={"750"}
      bildNr={bild2}
    />
    <CatListing
      Name={"Ägyptische Mau"}
      Preis={"720"}
      bildNr={bild3}
    />
    <CatListing
      Name={"American Curl"}
      Preis={"775"}
      bildNr={bild4}
    />
    <CatListing
      Name={"American Short"}
      Preis={"570"}
      bildNr={bild5}
    />
    <CatListing
      Name={"American Wirehair"}
      Preis={"600"}
      bildNr={bild6}
    />
    <CatListing
      Name={"Bengal"}
      Preis={"860"}
      bildNr={bild7}
    />
    <CatListing
      Name={"Bombay"}
      Preis={"900"}
      bildNr={bild8}
    />
    <CatListing
      Name={"deutsche Langhaar"}
      Preis={"750"}
      bildNr={bild9}
    />
    <CatListing
      Name={"(Main-Coon-Mix) Mylo"}
      Preis={"unverkäuflich"}
      bildNr={bild10}
    />
    </div>
    </div>
)  
  

