// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function() {
  // Get the button element
  var metamaskButton = document.getElementById("metamaskButton");

  // Add a click event listener to the button
  metamaskButton.addEventListener("click", function() {
    // Check if MetaMask is installed and enabled
    if (typeof ethereum === "undefined" || !ethereum.isMetaMask) {
      // MetaMask is not installed or enabled, display a warning popup
      alert("Please install and enable MetaMask to proceed.");
    } else {
      // MetaMask is installed and enabled, proceed with connection

      // Request user's permission to connect
      ethereum.request({ method: 'eth_requestAccounts' })
        .then(function(accounts) {
          // MetaMask is connected, display a success message
          console.log("Connected to MetaMask");
          console.log("Accounts:", accounts);
        })
        .catch(function(error) {
          // An error occurred while connecting to MetaMask, display an error popup
          alert("Error connecting to MetaMask: " + error.message);
        });
    }
  });

  // Ensure that the input values are valid decimal numbers
  const numberFields = document.querySelectorAll('input[type="text"]');

  numberFields.forEach((field) => {
    field.addEventListener('input', () => {
      const inputValue = field.value;
      const isValidNumber = /^\d*\.?\d*$/.test(inputValue);
      if (!isValidNumber) {
        field.value = '';
      }
    });
  });

  // Update options in dropdown2 based on selection in dropdown1
  const dropdown1 = document.getElementById('dropdown1');
  const dropdown2 = document.getElementById('dropdown2');

  dropdown1.addEventListener('change', () => {
    const selectedOption = dropdown1.value;

    if (selectedOption === 'option4') {
      // Display only option3 and option5 in dropdown2
      dropdown2.innerHTML = `
        <option value="option3">USDC</option>
        <option value="option5">SLVD</option>
      `;
    } else if (selectedOption === 'option5') {
      // Display only option4 in dropdown2
      dropdown2.innerHTML = `
        <option value="option4">SLVT</option>
      `;
    } else if (selectedOption === 'option3') {
      // Display only option4 in dropdown2
      dropdown2.innerHTML = `
        <option value="option4">SLVT</option>
      `;
    } else if (selectedOption === 'option2') {
      // Display only option4 in dropdown2
      dropdown2.innerHTML = `
        <option value="option4">SLVT</option>
      `;
    } else {
      // Reset dropdown2 to show all options
      dropdown2.innerHTML = `
        <option value="option1">Select Token</option>
        <option value="option2">Eth</option>
        <option value="option3">USDC</option>
        <option value="option4">SLVT</option>
        <option value="option5">SLVD</option>
      `;
    }
  });
});
