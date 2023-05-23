function generateSVG(data) {
    if (data.shape === 'Circle') {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect width="300" height="200" fill='white' />
        <circle cx="150" cy="100" r="80" fill="${data.shapecolor}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill='${data.textcolor}'>${data.text}</text>
        </svg>
        `;
    }
    else if (data.shape === 'Triangle') {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect width="300" height="200" fill='white' />
        <polygon points="150, 10 270, 155 40, 155" fill="${data.shapecolor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill='${data.textcolor}'>${data.text}</text>
        </svg>
        `;
    }
     else {
        return `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        <rect width="300" height="200" fill='white' />
        <rect x="75" y="30" width="150" height="150" fill="${data.shapecolor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill='${data.textcolor}'>${data.text}</text>
        </svg>
        `;
    }
}

module.exports = {
    generateSVG
  };