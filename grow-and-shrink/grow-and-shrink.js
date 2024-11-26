//document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const letterContainer = document.createElement("div");
    letterContainer.className = "letter-container";
    const buttonContainer = document.createElement("div");
    buttonContainer.className = "button-container";

    //letter container
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    alphabet.forEach((letter, index) => {
        const letterDiv = document.createElement("div");
        letterDiv.className = "letter";
        letterDiv.id = letter.toLowerCase();
        letterDiv.textContent = letter;
        if (index == 0) letterDiv.classList.add("selected");
        letterContainer.appendChild(letterDiv);
    });

    //button container
    const buttons = [
        {id: "prev", text: "<"},
        {id: "next", text: ">"},
        {id: "decrease", text: "-"},
        {id: "increase", text: "+"}
    ];
    buttons.forEach(({id, text}) => {
        const button = document.createElement("button");
        button.id = id;
        button.textContent = text;
        buttonContainer.appendChild(button);
    });

    //add containers
    body.appendChild(letterContainer);
    body.appendChild(buttonContainer);

    let selectedIndex = 0;
    const letterDivs = document.querySelectorAll(".letter");

    function updateSelection(newIndex) {
        letterDivs[selectedIndex].classList.remove("selected");
        selectedIndex = (newIndex + 26) % 26;
        letterDivs[selectedIndex].classList.add("selected");
    }

    function adjustFontSize(delta) {
        const selectedLetter = letterDivs[selectedIndex];
        const currentSize = parseInt(
            window.getComputedStyle(selectedLetter).fontSize
        );
        const newSize = Math.min(26, Math.max(10,  currentSize + delta));
        if (newSize != currentSize) {
            selectedLetter.style.fontSize = `${newSize}px`;
        }
    }

    //Button click events
    document.getElementById("prev").addEventListener("click", () => {
        updateSelection(selectedIndex - 1);
    });
    document.getElementById("next").addEventListener("click", () => {
        updateSelection(selectedIndex + 1);
    });
    document.getElementById("decrease").addEventListener("click", () => {
        adjustFontSize(-2);
    });
    document.getElementById("increase").addEventListener("click", () => {
        adjustFontSize(2);
    });

    //Letter click events
    letterDivs.forEach((letterDiv, index) => {
        letterDiv.addEventListener("click", () => {
            updateSelection(index);
        });
    });

//});