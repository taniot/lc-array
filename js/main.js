'use strict';



const iscritti = ["Gaetano", "Marco", "Luca", "Pippo"];
// console.log(iscritti);
// console.log(iscritti.length);


// iscritti // array
// iscritti.length; //lunghezza array
// iscritti.push('Cosimo'); //aggiungo elementi array

// console.log(iscritti);
// console.log(iscritti.length);

//Modifico elementi array
// iscritti[0] = 'Leonardo';
// iscritti[3] = 'Franco';

// console.log(iscritti);
// console.log(iscritti.length);

// console.log(iscritti[0]);
// console.log(iscritti[1]);
// console.log(iscritti[2]);
// console.log(iscritti[3]);
// console.log(iscritti[4]);

// console.log(iscritti);

// for(let i = 2; i < iscritti.length; i++){

//     // console.log(0);
//     // console.log(1);
//     // console.log(2);
//     // console.log(3);
//     // console.log(4);

//     //console.log(iscritti[i]);


//     // console.log(iscritti[0]);
//     // console.log(iscritti[1]);
//     // console.log(iscritti[2]);
//     // console.log(iscritti[3]);
//     // console.log(iscritti[4]);


// }



//console.log(iscritti.indexOf('Luca'));


//indexOf
console.log(iscritti);


console.log(iscritti.indexOf('Marco'))


for(let index = 0; index < iscritti.length; index++){
    // console.log(i);

    //iscritti[0] = 'Gaetano';
    //iscritti[1] = 'Marco';
    //iscritti[2] = 'Luca';
    //iscritti[3] = 'Pippo';
 

    if(iscritti[index] === 'Marco'){
        console.log(index);
    }

}



