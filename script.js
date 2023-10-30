document.addEventListener('DOMContentLoaded', function () {
    const addBtn = document.querySelector('.container__input button');
    const monthInput = document.querySelector('.container__input input[name="month"]');
    const categoryInput = document.querySelector('.container__input input[name="category"]');
    const totalInput = document.querySelector('.container__input input[name="total"]');
    const monthDisplay = document.querySelector('.month-display');
    const billItemsContainer = document.querySelector('.bill-items');
    const footer = document.querySelector('.footer');
  
    //rent
    let auntyTotal = 1235;
    let tshokeyTotal = 1235;
    let sonnieTotal = 830;
  
    addBtn.addEventListener('click', function () {
      const category = categoryInput.value;
      const total = parseFloat(totalInput.value);
      const month = monthInput.value;
  
      if (category && !isNaN(total)) {
        const billItem = document.createElement('div');
        billItem.textContent = `${category}: $${total}`;
        billItemsContainer.appendChild(billItem);
  
        if (['Coned', 'Nationalgrid', 'Internet', 'Water', 'Gas', 'Electricity'].includes(category)) {
          // Divide the total equally among "aunty," "tshokey," and "sonnie"
          const dividedTotal = total / 3;
          addToFooter('aunty', dividedTotal);
          addToFooter('tshokey', dividedTotal);
          addToFooter('sonnie', dividedTotal);
        } else {
          // Divide the total equally between "aunty" and "tshokey"
          const dividedTotal = total / 2;
          addToFooter('aunty', dividedTotal);
          addToFooter('tshokey', dividedTotal);
        }
  
        // Clear the input fields after adding the bill item
        categoryInput.value = '';
        totalInput.value = '';
      }
  
      if (month) {
        monthDisplay.textContent = `Month: ${month}`;
      }
  
      updateFooter();
    });
  
    function addToFooter(label, total) {
      if (label === 'aunty') {
        auntyTotal += total;
      } else if (label === 'tshokey') {
        tshokeyTotal += total;
      } else if (label === 'sonnie') {
        sonnieTotal += total;
      }
  
      updateFooter();
    }
  
    function updateFooter() {
      const auntyTotalDiv = footer.querySelector('div[id="aunty"]');
      const tshokeyTotalDiv = footer.querySelector('div[id="tshokey"]');
      const sonnieTotalDiv = footer.querySelector('div[id="sonnie"]');
      
      auntyTotalDiv.textContent = `total: $${auntyTotal.toFixed(2)}`;
      tshokeyTotalDiv.textContent = `total: $${tshokeyTotal.toFixed(2)}`;
      sonnieTotalDiv.textContent = `total: $${sonnieTotal.toFixed(2)}`;
    }
  });
  