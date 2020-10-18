
        // Array of Object:
        // Title-Registration-Form;

      var registrationArr = []

      registration = {
        Firstname : "Registration",
        Lastname : "Form",
      }

      title = "";

      data = document.getElementsByClassName('title')[0];

      registrationArr.push(registration)

      for(var i = 0; i<registrationArr.length; i++){
        title += "<h1>" + registrationArr[i].Firstname + " " + registrationArr[i].Lastname + "</h1>"
        title += "<h3>" + "Fill this form to get registered" + "</h3>"
      }

      data.innerHTML = title;


      var myInput = document.getElementById("psw");
      var letter = document.getElementById("letter");
      var capital = document.getElementById("capital");
      var number = document.getElementById("number");
      var length = document.getElementById("length");

      myInput.onfocus = function(){
        document.getElementById("message").style.display = "block";
      }

      myInput.onblur = function(){
        document.getElementById("message").style.display = "none";
      }

      myInput.onkeyup = function(){
        var lowerCaseLetters = /[a-z]/g;
        if (myInput.value.match(lowerCaseLetters)) {
          letter.classlist.remove("invalid");
          letter.classlist.add("valid");
        } else {
          letter.classlist.remove("valid");
          letter.classlist.add("invalid")
        }

        var upperCaseLetters = /[A-Z]/g;
        if (myInput.value.match(upperCaseLetters)) {
          letter.classlist.remove("invalid");
          letter.classlist.add("valid");
        } else {
          letter.classlist.remove("valid");
          letter.classlist.add("invalid")
        }

        var number = /[0-9]/g;
        if (myInput.value.match(number)) {
          letter.classlist.remove("invalid");
          letter.classlist.add("valid");
        } else {
          letter.classlist.remove("valid");
          letter.classlist.add("invalid")
        }

        if (myInput.value.length >=8) {
          letter.classlist.remove("invalid");
          letter.classlist.add("valid");
        } else {
          letter.classlist.remove("valid");
          letter.classlist.add("invalid")
        }

      }

      function myFunction(){
        var x = document.createElement("INPUT");
        x.setAttribute("type", "date");
        x.setAttribute("value", "date");
        document.body.appendChild(x);
      }

