document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById("account-number").value;
    const amount = getInputValueById("cash-out-amount");
    const pinNumber = getInputValueById("cash-out-pin");
    const mainBalance = getInnerTextById("main-balance");
    if (accountNumber.length === 11) {
      if (pinNumber === 1234) {
        const total = mainBalance - amount;
        setInnerTextByIdandValue("main-balance", total);
      } else {
        alert("Pin is not Valid");
      }
    } else {
      alert("account number is not valid");
    }
  });
