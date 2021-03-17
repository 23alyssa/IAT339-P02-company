
//menu navigation - example
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

//reset contact form
  function resetClear() {
    document.getElementById("contactForm").reset();
    document.getElementById("paymentForm").reset();
  }