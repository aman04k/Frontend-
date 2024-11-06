document.addEventListener('DOMContentLoaded', () => {
    const colorDisplay = document.getElementById('colorDisplay');
    const colorCode = document.getElementById('colorCode');
    const newColorBtn = document.getElementById('newColorBtn');
    const saveColorBtn = document.getElementById('saveColorBtn');
    const savedColors = document.getElementById('savedColors');

    // Generate and display a new random color
    function generateColor() {
        const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
        colorDisplay.style.backgroundColor = randomColor;
        colorCode.textContent = randomColor;
    }

    // Save the current color
    function saveColor() {
        const colorHex = colorCode.textContent;
        const li = document.createElement('li');

        const colorBox = document.createElement('div');
        colorBox.classList.add('color-box');
        colorBox.style.backgroundColor = colorHex;

        const colorLabel = document.createElement('span');
        colorLabel.textContent = colorHex;

        // Copy button
        const copyBtn = document.createElement('button');
        copyBtn.textContent = 'Copy';
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText(colorHex);
            alert(`Copied ${colorHex} to clipboard!`);
        });

        li.appendChild(colorBox);
        li.appendChild(colorLabel);
        li.appendChild(copyBtn);
        savedColors.appendChild(li);
    }

    // Event listeners for buttons
    newColorBtn.addEventListener('click', generateColor);
    saveColorBtn.addEventListener('click', saveColor);

    // Generate an initial color
    generateColor();
});
