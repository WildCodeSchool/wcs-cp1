/*
Un employé de théatre voudrait afficher la liste de tous les sièges présents dans sa salle principale.
Dans la salle les sièges sont répartis de la manière suivante : 
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
  const finalArray = [];

  for(let col = 1; col <= 26; col+= 1) {
    const colArray = [];
    for (let seat = 1; seat <= 100; seat += 1) {
      colArray.push(`${col}-${seat}`)
    }
    finalArray.push(colArray);
  }
  return finalArray;
}

// function theaterSieges() {

//   for(let col = 1; col <= 26; col+= 1) {
//     const returnedArray = [];
//     for (let seat = 1; seat <= 100; seat += 1) {
//       returnedArray.push(`${col}-${seat}`)
//     }
//     return returnedArray;
//   }

// function theaterSieges() {
//   new Array(26).fill().map((item, indexFirstArray) => {
//     return new Array(100).fill().map((item, indexSecondArray) => {
//       return `${indexFirstArray + 1}-${indexSecondArray + 1}`
//     })
//   }) 
// }


console.log(theaterSieges());

module.exports = theaterSieges;
