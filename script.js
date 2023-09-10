const svgNamespace = "http://www.w3.org/2000/svg";
const center = { x: 250, y: 250 };
const smallCircleRadius = 40;
const radius = 210 - smallCircleRadius;
const popup = document.getElementById("popup");
const popupContent = document.getElementById("popupContent");

const elements = [
    { name: "Akasha", color: "#8842d5", baseAngle: -90 },
    { name: "Fire", color: "#e63946", baseAngle: -18 },
    { name: "Water", color: "#2a9d8f", baseAngle: 54 },
    { name: "Air", color: "#457b9d", baseAngle: 126 },
    { name: "Earth", color: "#8B4513", baseAngle: 198 }
];

function getPosition(angle) {
    return {
        x: center.x + radius * Math.cos((angle * Math.PI) / 180),
        y: center.y + radius * Math.sin((angle * Math.PI) / 180)
    };
}

function createGradient(element) {
    const gradient = document.createElementNS(svgNamespace, "radialGradient");
    gradient.id = `${element.name}Gradient`;
    gradient.innerHTML = `
        <stop offset="10%" style="stop-color:${element.color};stop-opacity:1" />
        <stop offset="90%" style="stop-color:${element.color};stop-opacity:0.5" />
    `;
    return gradient;
}

function createCircle(element, position) {
    const circle = document.createElementNS(svgNamespace, "circle");
    circle.setAttribute("cx", position.x);
    circle.setAttribute("cy", position.y);
    circle.setAttribute("r", smallCircleRadius);
    circle.setAttribute("fill", `url(#${element.name}Gradient)`);
    if (element.name === "Akasha") {
        circle.setAttribute("filter", "url(#glow)");
    }
    return circle;
}

function addCircleInteraction(circle, element) {
    circle.addEventListener("mouseenter", () => {
        circle.setAttribute("filter", "url(#glow)");  // Add glow effect
        popupContent.innerHTML = document.getElementById(`${element.name}Info`).innerHTML;
        popup.classList.add("showPopup");
    });

    circle.addEventListener("mouseleave", () => {
        circle.removeAttribute("filter");  // Remove glow effect
        popup.classList.remove("showPopup");
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const svg = document.getElementById("elementsCircle");
    
    elements.forEach(element => {
        const gradient = createGradient(element);
        svg.appendChild(gradient);

        const position = getPosition(element.baseAngle);
        const circle = createCircle(element, position);
        addCircleInteraction(circle, element);
        svg.appendChild(circle);
    });
});
