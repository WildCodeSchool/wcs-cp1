/*
Un employé de théatre voudrait afficher la liste de tous les sièges présents dans sa salle principale.
Dans la salle les sièges sont répartis de la manière suivantes : 
  - Il y a 26 colonnes de sièges, numérotés de "1" à "26"
  - Chaque colonne contient 100 sièges, numérotés de "1" à "100"
Au final la liste devra ressembler à : 
1-1 
1-2
1-3
.
.
.
26-98
26-99
26-100
*/

function theaterSieges() {


  const colonnes = 26;
  const  places = 100;
  let arr = new Array(colonnes); 
  for (let i = 0; i < colonnes; i++) {
   const sieges = new Array(places); 
   for (let j = 0; j< sieges.length; j++) {
    sieges[j] = (i+1)+"-"+(j+1);
   }
   arr[i] = sieges; 
  }
  return arr;
  }
  
  console.log(theaterSieges()[25][10]);
  
  module.exports = theaterSieges;
