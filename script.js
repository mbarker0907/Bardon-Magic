const svgNamespace = "http://www.w3.org/2000/svg";
const center = { x: 250, y: 250 };
const smallCircleRadius = 40;
const radius = 225 - smallCircleRadius;

// Elements data
const elements = [
    { name: "Akasha", color: "#8842d5", baseAngle: -90 },
    { name: "Fire", color: "#e63946", baseAngle: -18 },
    { name: "Water", color: "#2a9d8f", baseAngle: 54 },
    { name: "Air", color: "#457b9d", baseAngle: 126 },
    { name: "Earth", color: "#8B4513", baseAngle: 198 }
];

// Calculate position based on the angle
function getPosition(angle) {
    return {
        x: center.x + radius * Math.cos((angle * Math.PI) / 180),
        y: center.y + radius * Math.sin((angle * Math.PI) / 180)
    };
}

// Generate radial gradient for given element
function createGradient(element) {
    const gradient = document.createElementNS(svgNamespace, "radialGradient");
    gradient.id = `${element.name}Gradient`;
    gradient.innerHTML = `
        <stop offset="10%" style="stop-color:${element.color};stop-opacity:1" />
        <stop offset="90%" style="stop-color:${element.color};stop-opacity:0.5" />
    `;
    return gradient;
}

// Generate circle SVG for given element and position
function createCircle(element, position) {
    const circle = document.createElementNS(svgNamespace, "circle");
    circle.setAttribute("cx", position.x);
    circle.setAttribute("cy", position.y);
    circle.setAttribute("r", smallCircleRadius);
    circle.setAttribute("fill", `url(#${element.name}Gradient)`);
    return circle;
}

// Add mouseenter and mouseleave events for circle elements
function addCircleInteraction(circle, hexagon, element) {
    const popup = document.getElementById("popup");
    const popupContent = document.getElementById("popupContent");

    circle.addEventListener("mouseenter", () => {
        hexagon.setAttribute("opacity", "1");
        circle.setAttribute("filter", "url(#glow)");  
        popupContent.innerHTML = document.getElementById(`${element.name}Info`).innerHTML;
        popup.classList.add("showPopup");
    });

    circle.addEventListener("mouseleave", () => {
        hexagon.setAttribute("opacity", "0");
        circle.removeAttribute("filter");  
        popup.classList.remove("showPopup");
    });
}

// Create pentagon path
function createPentagonPath(center) {
    // This remains as a reduction factor to adjust the size of the pentagon
    const reductionFactor = 0.90;
    
    // Adjusting the calculation to accommodate for a pentagon
    const pentagonRadius = (radius - smallCircleRadius) * reductionFactor;

    const points = [];
    for (let i = 0; i < 5; i++) {  // There are only 5 vertices for a pentagon
        const angle = (2 * Math.PI / 5) * i - Math.PI / 2;  // 360 degrees / 5
        const x = center.x + pentagonRadius * Math.cos(angle);
        const y = center.y + pentagonRadius * Math.sin(angle);
        points.push([x, y]);
    }
    return `M ${points[0][0]} ${points[0][1]} L ${points[1][0]} ${points[1][1]} L ${points[2][0]} ${points[2][1]} L ${points[3][0]} ${points[3][1]} L ${points[4][0]} ${points[4][1]} Z`;
}

document.addEventListener("DOMContentLoaded", () => {
    const svg = document.getElementById("elementsCircle");
    
    // Create and append pentagon first
    const pentagonPath = createPentagonPath(center);
    const pentagon = document.createElementNS(svgNamespace, "path");
    pentagon.setAttribute("d", pentagonPath);
    pentagon.setAttribute("fill", "url(#goldGradient)");
    pentagon.setAttribute("stroke", "url(#goldGradient)");
    pentagon.setAttribute("stroke-width", "10");
    pentagon.setAttribute("opacity", ".9");
    svg.appendChild(pentagon);

    elements.forEach(element => {
        const gradient = createGradient(element);
        svg.appendChild(gradient);

        const position = getPosition(element.baseAngle);
        const circle = createCircle(element, position);
        
        if (element.name === "Akasha") {
            circle.setAttribute("filter", "url(#glow)");
        }
        
        addCircleInteraction(circle, pentagon, element);  // Changed hexagon to pentagon
        svg.appendChild(circle);
    });
});
