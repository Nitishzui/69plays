document.addEventListener('DOMContentLoaded', () => {
  const refreshBtn = document.getElementById('refresh-btn');
  const yourColorsDiv = document.getElementById('your-colors');
  const availableColorsDiv = document.getElementById('available-colors');

  const colors = [
    { name: 'Red', hex: '#FF0000' },
    { name: 'Blue', hex: '#0000FF' },
    { name: 'Green', hex: '#00FF00' },
    { name: 'Yellow', hex: '#FFFF00' },
    { name: 'Purple', hex: '#800080' }
  ];

  let yourColors = [];

  function renderColors() {
    // Render your colors
    yourColorsDiv.innerHTML = '';
    yourColors.forEach(color => {
      const colorDiv = document.createElement('div');
      colorDiv.classList.add('color-box');
      colorDiv.style.backgroundColor = color.hex;
      colorDiv.addEventListener('click', () => tradeColor(color));
      yourColorsDiv.appendChild(colorDiv);
    });

    // Render available colors for trade
    availableColorsDiv.innerHTML = '';
    colors.forEach(color => {
      if (!yourColors.some(c => c.hex === color.hex)) {
        const colorDiv = document.createElement('div');
        colorDiv.classList.add('color-box');
        colorDiv.style.backgroundColor = color.hex;
        colorDiv.addEventListener('click', () => tradeColor(color, true));
        availableColorsDiv.appendChild(colorDiv);
      }
    });
  }

  function tradeColor(color, isAvailable = false) {
    if (isAvailable) {
      // Add color to your portfolio
      yourColors.push(color);
    } else {
      // Remove color from your portfolio
      yourColors = yourColors.filter(c => c.hex !== color.hex);
    }
    renderColors();
  }

  refreshBtn.addEventListener('click', renderColors);

  renderColors(); // Initial rendering
});
