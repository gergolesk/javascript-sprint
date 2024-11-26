const contentDiv = document.createElement("div");
contentDiv.id = "content";

const paragraph = document.createElement("p");
paragraph.textContent = "code";
contentDiv.appendChild(paragraph);

const controlsDiv = document.createElement("div");
controlsDiv.className = "controls";

const buttons = [
    {id: "bold", label: "B", class: "bold", style: "fontWeight", value: "bold"},
    { id: "italic", label: "I", class: "italic", style: "fontStyle", value: "italic" },
    { id: "underline", label: "U", class: "underline", style: "textDecoration", value: "underline" },
    { id: "highlight", label: "Highlight", class: "highlight", action: () => {
        const isHighlighted = contentDiv.classList.toggle("highlight");
        contentDiv.style.backgroundColor = isHighlighted ? "yellow" : "white";
    } }
];

buttons.forEach(({id,  label, class: className, style, value,  action}) => {
    const button = document.createElement("button");
    button.id = id;
    button.textContent = label;
    button.addEventListener("click", () => {
        if (action) {
            action();
        } else {
            const isActive = paragraph.classList.toggle(className);
            paragraph.style[style] = isActive ? value : "";
        }
    });
    controlsDiv.appendChild(button);
});

document.body.appendChild(contentDiv);
document.body.appendChild(controlsDiv);
