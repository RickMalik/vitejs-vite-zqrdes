import React, { useState } from 'react';

const SilverTokenWidget = () => {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [dropdown1, setDropdown1] = useState('option1');
  const [dropdown2, setDropdown2] = useState('option1');

  const handleNumber1Change = (event) => {
    const inputValue = event.target.value;
    setNumber1(inputValue);
  };

  const handleNumber2Change = (event) => {
    const inputValue = event.target.value;
    setNumber2(inputValue);
  };

  const handleDropdown1Change = (event) => {
    const selectedOption = event.target.value;
    setDropdown1(selectedOption);

    if (selectedOption === 'option2') {
      setDropdown2('option4');
    } else {
      setDropdown2('option1');
    }
  };

  return (
    <div className="container">
      <div className="top">
        <h2>Swap / Buy</h2>
      </div>
      <br />
      <input
        type="number"
        id="number1"
        name="number1"
        maxLength="8"
        placeholder="0"
        value={number1}
        onChange={handleNumber1Change}
      />
      <select id="dropdown1" name="dropdown1" value={dropdown1} onChange={handleDropdown1Change}>
        <option value="option1">Select Token</option>
        <option value="option2">ETH</option>
        <option value="option3">USDC</option>
        <option value="option4">SLVT</option>
        <option value="option5">SLVD</option>
      </select>

      <br />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
      <center>
        <i className="fa fa-arrow-circle-down" style={{ fontSize: '25px', color: 'green' }}></i>
      </center>

      <input
        type="number"
        id="number2"
        name="number2"
        maxLength="8"
        placeholder="0"
        value={number2}
        onChange={handleNumber2Change}
      />
      <select id="dropdown2" name="dropdown2" value={dropdown2} disabled>
        <option value="option1">Select Token</option>
        <option value="option4">SLVT</option>
      </select>

      <button id="metamaskButton">Connect Wallet</button>
      <script src="ethereum-enabled.js"></script>
    </div>
  );
};


  // Your SilverTokenWidget component code here
};

export default SilverTokenWidget;