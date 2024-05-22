import './styles/Listing.css'

function CatListing ({Name, Preis, bildNr}) {
        return (   
         <div className="cat-list"> 
             <img src= {bildNr}
             alt= {Name} style={{width: '300px', height: 'auto'}}/>
             <h2>Rasse: {Name} </h2>
             <h2>Preis: €{Preis}</h2>
             <div style={{border: '5px solid black'}}/>
             <div style={{border: '10px solid white'}}/>
         </div>
     )
 }



export default CatListing