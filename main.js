/*
console.log("It works!");

$(document).ready(function() {
  $(".submit").click(function(event) {
    event.preventDefault();
    console.log("Clicked button");

    var name = $(".name").val();
    var email = $(".email").val();
    var phone = $(".phone").val();
    var message = $(".message").val();
    var statusElm = $(".status");
    statusElm.empty();

    if (email.length > 5 && email.includes("@") && email.includes(".")) {
      statusElm.append("<div>Email is valid</div>");
    } else {
      event.preventDefault();
      console.log("Email not valid");
    }

    if (name.length > 3) {
      statusElm.append("<div>Name is valid</div>");
    } else {
      event.preventDefault();
      statusElm.append("<div>Please enter your name</div>");
    }
  });
});

*/
