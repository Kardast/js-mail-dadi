// Gioco dei dadi

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.

// Stabilire il vincitore, in base a chi fa il punteggio più alto.

const buttonPlay = document.querySelector('.play');
console.log(buttonPlay);
let finalResult = document.querySelector('.result');

buttonPlay.addEventListener('click',
    function () {
        const player1 = Math.floor(Math.random() * 6) + 1;
        console.log(player1);
        const playerPc = Math.floor(Math.random() * 6) + 1;
        console.log(playerPc);

        if (player1 > playerPc) {
            console.log("win");   
            finalResult.innerHTML = "Hai vinto";
        } else if (player1 === playerPc) {
            console.log("draw");
            finalResult.innerHTML = "Hai pareggiato";
        } else {
            console.log("lose");
            finalResult.innerHTML = "Hai perso";
        }
    }

)

// ----------------LEZIONE----------------

// const myList = document.getElementById('listaNomi');

// creazione dell'array iniziale
// const iscritti = ["Luca", "MArco", "Paolo"];

// aggiunta di un elemento all'array
// iscritti.push('Michele');

// console.log(iscritti);
// console.log(iscritti[3]);


// for (let i = 0; i < iscritti.length; i++){
//     let iscrittoN = iscritti[i];
//     console.log(iscrittoN);
//     // myList.innerHTML += `<li class="liclass_prova liclass_prova-${i}"> ${iscrittoN} </li>`;
//     // creiamo l'elemento da inserire successivamente
//     const liElement = document.createElement('li');
//     // aggiungiamo una classe ad elemento
//     liElement.classList.add('liclass', 'altra_classe');
//     // aggiungiamo contenuto
//     liElement.append(iscrittoN);
//     // aggiungere il li all'ul
//     myList.append(liElement);
// }

// iscritti.push('sidufbh');

// console.log("lunghezza nuova array", iscritti);

// console.log("altre cose da eseguire dopo il ciclo dell'array");


// abbiamo una lista di partenza 
// creiamo l'array
// const listaFrutta = ["Banana", "Kiwi", "Mela", "Pera", "Lithcis"];

// const myInput = document.querySelector('input');
// console.log(myInput);
// const myButton = document.querySelector('button');
// console.log(myButton);
// const myOutput = document.querySelector('.scelta');
// console.log(myOutput);



// chiediamo all'utente di darci un numero di indice per stampare un elemento specifico (tramite interfaccia in pagina)
// myButton.addEventListener("click",
//     function() {
//         let indexUser = myInput.value;
//         // facilitazione per utente
//         let indexUserDev = indexUser - 1;
//         // myOutput.append(listaFrutta[indexUserDev]);
//         myOutput.innerHTML = listaFrutta[indexUserDev];
//     }
// )


// faccio output in pagina




// abbiamo un array di numeri interi

// const listaNum = [12, 11, 3, 4, 77, 86, 13, 15];
// console.log(listaNum);

// stampiamo solo i numeri dispari
// for (let i = 0; i < listaNum.length; i++){

//     let numIter = listaNum[i];

//     if (numIter % 2 !== 0){
//         console.log(numIter);
//     }
// }