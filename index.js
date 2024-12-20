let subscribeBtn = document.getElementById("btn");
let inputEmail = document.getElementById("mail");
let invalidEl = document.getElementById("invalid-mail");
let emptyEl = document.getElementById("empty-mail");
let mainContainer = document.getElementById("father-container");
let successContainer = document.getElementById("success-message");
let dismissBtn = document.getElementById("dismiss");
let filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
subscribeBtn.addEventListener("click", function () {
  // if (!inputEmail.value) {
  //   invalidEl.style.display = "flex";
  //   inputEmail.style.borderColor = "red";
  //   // alert("fill the form");
  // } else {
  //   mainContainer.innerHTML = ` <div id="success-message">
  //       <img class="image" src="./assets/images/icon-success.svg" />
  //       <h2>Thanks for subscribing!</h2>
  //       <p class="confirmation">
  //         A confirmation email has been sent to ${inputEmail.value} Please
  //         open it and click the button inside to confirm your subscription.
  //       </p>
  //       <button id="dismiss">Dismiss message</button>
  //     </div>
  //   </div>`;
  // }

  if (!inputEmail.value.match(filter)) {
    invalidEl.style.display = "flex";
    inputEmail.style.borderColor = "red";

    // alert("input your email");
  } else {
    mainContainer.innerHTML = ` <div id="success-message">
          <img class="image" src="./assets/images/icon-success.svg" />
       <h2>Thanks for subscribing!</h2>
          <p class="confirmation">
            A confirmation email has been sent to ${inputEmail.value} Please
            open it and click the button inside to confirm your subscription.
           </p>
           <button id="dismiss">Dismiss message</button>
     </div>
      </div>`;
  }
});


