import React, { useState } from 'react';

const ElementsCircle = () => {
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

    // state to track which circle is hovered
    const [hoveredElement, setHoveredElement] = useState(null);

    // Calculate position based on the angle
    const getPosition = (angle) => {
        return {
            x: center.x + radius * Math.cos((angle * Math.PI) / 180),
            y: center.y + radius * Math.sin((angle * Math.PI) / 180)
        };
    };

    // Create pentagon path
    const createPentagonPath = (center) => {
        const reductionFactor = 0.90;
        const pentagonRadius = (radius - smallCircleRadius) * reductionFactor;
        const points = [];

        for (let i = 0; i < 5; i++) {
            const angle = (2 * Math.PI / 5) * i - Math.PI / 2;
            const x = center.x + pentagonRadius * Math.cos(angle);
            const y = center.y + pentagonRadius * Math.sin(angle);
            points.push([x, y]);
        }
        return `M ${points[0][0]} ${points[0][1]} L ${points[1][0]} ${points[1][1]} L ${points[2][0]} ${points[2][1]} L ${points[3][0]} ${points[3][1]} L ${points[4][0]} ${points[4][1]} Z`;
    };

    const pentagonPath = createPentagonPath(center);

    return (
        <svg id="elementsCircle">
            <path d={pentagonPath} fill="url(#goldGradient)" stroke="url(#goldGradient)" strokeWidth="10" opacity={hoveredElement ? "1" : ".9"} />

            {elements.map(element => {
                const position = getPosition(element.baseAngle);

                return (
                    <circle
                        key={element.name}
                        cx={position.x}
                        cy={position.y}
                        r={smallCircleRadius}
                        fill={`url(#${element.name}Gradient)`}
                        filter={element.name === "Akasha" || element.name === hoveredElement ? "url(#glow)" : ""}
                        onMouseEnter={() => setHoveredElement(element.name)}
                        onMouseLeave={() => setHoveredElement(null)}
                    />
                );
            })}
        </svg>
    );
};

export default ElementsCircle;
