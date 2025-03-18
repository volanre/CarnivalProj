function sayHello() {
    let textElement = document.getElementById("text");
    textElement.textContent = "Generating curve...";

    let count = 0;
    let maxUpdates = 70; 
    let intervalTime = 50;

    setTimeout(() => {
        let interval = setInterval(() => {
            let randomNumber = Math.floor(Math.random() * 80) + 0;
            if (count < 65){
                randomNumber = Math.floor(Math.random() * 999) + 0;
            }
            textElement.textContent = "Test Curve: " + randomNumber;
            count++;

            if (count >= maxUpdates) {
                clearInterval(interval); 
            }
        }, intervalTime);
    }, 100); 

}