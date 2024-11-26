const outsideDiv = document.createElement("div");
outsideDiv.classList.add("zone", "outside");

const insideDiv = document.createElement("div");
insideDiv.classList.add("zone", "inside");

document.body.appendChild(outsideDiv);
document.body.appendChild(insideDiv);

let currentCharacter = null;
const body = document.body;

let mouseX = 0;
let mouseY = 0;

//
document.addEventListener("keydown", (event) => {
    if (event.key == "Escape") {
        //Remove all characters
        document.querySelectorAll(".character").forEach((char) => char.remove());
        currentCharacter = null;
        return;
    }

    //Check pressed key (a-z)
    if (/^[a-z]$/.test(event.key)) {
        if  (currentCharacter) {
            currentCharacter.classList.remove("follow");
        }

        //Make new  div for symbols
        const charDiv = document.createElement("div");
        charDiv.textContent = event.key;
        charDiv.classList.add("character", "follow");

        //Set symbol under cursor
        charDiv.style.left = `${mouseX-20}px`;
        charDiv.style.top = `${mouseY-20}px`;

        const jail = document.querySelector(".inside");
        const rect = jail.getBoundingClientRect();

     //Check cursor is in jail
        const inJail =
            mouseX >= rect.left &&
            mouseX <= rect.right &&
            mouseY >= rect.top &&
            mouseY <= rect.bottom;

        if (inJail) {
            charDiv.classList.add("trapped");
        } 

        body.appendChild(charDiv);
        currentCharacter = charDiv;
        console.log(charDiv);
    }

});

//Watching mouse move
document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    if (!currentCharacter) return;

    const jail = document.querySelector(".inside");
    const rect = jail.getBoundingClientRect();

    // Moving symbol
    currentCharacter.style.left = `${event.clientX-20}px`;
    currentCharacter.style.top = `${event.clientY-20}px`;

    //Check cursor is in jail
    const inJail =
        event.clientX >= rect.left+20 &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top+20 &&
        event.clientY <= rect.bottom;
    /*
    if (inJail) {
        currentCharacter.classList.add("trapped");
    } else {
        currentCharacter.classList.remove("trapped");
    }
        */

    if (inJail) {
        currentCharacter.classList.add("trapped");
        currentCharacter.style.left = `${mouseX - 20}px`;
        currentCharacter.style.top = `${mouseY - 20}px`;
    } else if (currentCharacter.classList.contains("trapped")) {
        // Если курсор покинул "тюрьму", символ остаётся внутри
        currentCharacter.classList.remove("follow");
        currentCharacter = null; // Отключаем связь символа с курсором
    }
});

//Handling jail escaping
document.addEventListener("mousemove", (event) => {
    if (!currentCharacter) return;

    const jail = document.querySelector(".inside");
    const rect = jail.getBoundingClientRect();

    const isOutsideJail =
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom;

    if (isOutsideJail && currentCharacter.classList.contains("trapped")) {
        currentCharacter.classList.remove("follow");
        currentCharacter = null;
    }
});