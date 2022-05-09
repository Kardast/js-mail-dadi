// Chiedi all'utente la sua email
    // creazione di form che chieda la email

// controlla che sia nella lista di chi può accedere
    // creazione di una lista di email valide
    // creazione di un qualcosa che controlli se la email inserita sia già nella lista

// stampa un messaggio appropriato sull’esito del controllo
    // creazione di uno spazio dove verrà stampato il messaggio
    // se la sua email c'è allora un messaggio
    // se la sua email non è presente allora altro messaggio

const emailList = ['pinco@gmail.com', 'pallino@gmail.com', 'gatto@gmail.com', 'cane@gmail.com'];
console.log(emailList);

let userInput = document.querySelector('main .email_input').value;

// prompt("inserisci la tua email");
// document.querySelector('main .email_input');
console.log(userInput);

const userButton = document.querySelector('main .email_button');
console.log(userButton);

const userOutput = document.querySelector('main .output');
console.log(userOutput);

userButton.addEventListener('click',
    function() {

        let check = false;

        for (let i = 0; i < emailList.length; i++) {
            if (userInput === emailList[i]) {
                check = true;
            }
        }

        if (check === true){
            console.log("ok");
            // userOutput.innerHTML += `<li class="liclass_prova liclass_prova-${i}"> ${iscrittoN} </li>`;
        } else{
            console.log("no");
        }
    }
)


// -----------------------------------------------------LEZIONE

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