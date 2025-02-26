document
  .getElementById("Add-Money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const amount = getInputValueById("amout");
    const pin = getInputValueById("pin");
    const accountNumber = document.getElementById("account-number").value;
    const mainBalance = getInnerTextById("main-balance");
    if (accountNumber.length === 11) {
      if (pin === 1234) {
        const sum = mainBalance + amount;
        setInnerTextByIdandValue("main-balance", sum);
      } else {
        alert("Pin thik nai");
      }
    } else {
      alert("account number thik nai");
    }
  });
