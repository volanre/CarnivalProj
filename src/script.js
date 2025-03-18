function sayHello() {
    let textElement = document.getElementById("text");
    textElement.textContent = "Generating number...";

    let count = 0; // Counter for how many times the number updates
    let maxUpdates = 20; // Number of times it will update
    let intervalTime = 50; // Time between updates (in milliseconds)

    // Start after a short delay
    setTimeout(() => {
        let interval = setInterval(() => {
            let randomNumber = Math.floor(Math.random() * 100) + 1;
            textElement.textContent = "Random Number: " + randomNumber;
            count++;

            if (count >= maxUpdates) {
                clearInterval(interval); // Stop after maxUpdates times
            }
        }, intervalTime);
    }, 100); // Initial delay before the first update (1 second)

}