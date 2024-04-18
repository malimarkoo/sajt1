var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    setTimeout(showSlides, 3000); 
}


function zoomIn(img){
	img.style.transform = "scale(2)";
}

function zoomOut(img){
	img.style.transform = "scale(1)";
}

function toggleMenu(){
	var menu = document.getElementById("menu");
	if(menu.style.display === "block"){
		menu.style.display = "none";
	}else{
		menu.style.display = "block";
	}
}


    const computer = ['Dell', 'HP', 'Apple',];
    let comp= prompt(`Enter the computer you want:`)
    
    if(comp===`Dell`){
     alert(`You want to buy this one? We have the best options sor you!`)
    }
    else if(comp===`HP`){
     alert(`You want to buy this one? We have the best options sor you!`)
    }
    else if(comp===`Apple`){
     alert(`You want to buy this one? We have the best options sor you!`)
    }
    else{
        alert(`Unfortunately we do not have the desired computer.`)
    
    }
      const racunari = [
        {
          model: "Dell Inspiron 15 5000",
          procesor: "Intel Core i5-1135G7",
          ram: 8,
          disk: "512GB SSD",
          grafika: "Intel Iris Xe Graphics",
          cijena: 869.99
        },
        {
          model: "HP Pavilion Gaming 15",
          procesor: "AMD Ryzen 5 5600H",
          ram: 16,
          disk: "512GB SSD",
          grafika: "Nvidia GeForce GTX 1650",
          cijena: 999.99
        },
        {
          model: "Apple MacBook Pro 13",
          procesor: "Apple M1 chip",
          ram: 8,
          disk: "256GB SSD",
          grafika: "Apple M1 GPU",
          cijena: 1299.00
        }
      ];

      function generatecomputerHTML(computer) {
        return `<li>${computer}</li>`;
        }
        
        function displaycomputers() {
         const computerList = document.getElementById('computer-list');
         computerList.innerHTML = "";
        
         computers.forEach(function(computer) {
          computerList.innerHTML += generatecomputerHTML(computer);
         });
        }
        
        function addcomputer() {
         const computerInput = document.getElementById('computer-input');
         const newcomputer = computerInput.value;
        
         if(newcomputer !== "") {
          computers.push(newcomputer);
          displaycomputers();
          computerInput.value = "";
         }
        }
        
        const addButton = document.getElementById('add-button');
        addButton.addEventListener('click', addcomputer);
        
      
        
        
        const computerList = document.getElementById('computer-list');
        computerList.style.listStyle = "none";
        computerList.style.textAlign = "left";
        
        
        
        const contactForm = document.getElementById('contact-form');
        contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const formName = contactForm.elements['name'].value;
        const formEmail = contactForm.elements['email'].value;
        const formMessage = contactForm.elements['message'].value;
        
        console.log(`Name: ${formName}\nEmail: ${formEmail}\nMessage: ${formMessage}`);
        
         contactForm.reset();
        });
        const greeting = "Hello, world!";
        console.log(greeting.toUpperCase());
        console.log(greeting.toLowerCase());
        console.log(greeting.includes("world"));
        console.log(greeting.substring(0, 5));
        
        const numbers = [1, 3, 2, 5, 4];
        console.log(numbers.sort());
        console.log(numbers.reverse());
        console.log(numbers.join(", "));
        console.log(numbers.indexOf(5));

        function validateLogin() {
          var username = document.getElementById("username").value;
          var password = document.getElementById("password").value;
      
          if (username === "user" && password === "password") {
              // Ukoliko su podaci ispravni, možete preusmeriti korisnika na određenu stranicu
              window.location.href = "welcome.html";
          } else {
              document.getElementById("error-message").innerText = "Invalid username or password.";
          }
      }
      