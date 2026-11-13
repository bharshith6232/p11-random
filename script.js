const n = document.getElementById("n");
const click = document.getElementById("click");
const result = document.getElementById("result");

// Generate random number between 0 and 9
let luckyNumber = Math.floor(Math.random() * 10);

function checkLuckyNumber() {
    // Validation
    if (n.value === "") {
        result.textContent = "⚠ Please enter a number.";
        result.style.color = "#FF204E";
        return;
    }

    const userNumber = Number(n.value);

    if (userNumber < 0 || userNumber > 9) {
        result.textContent = "⚠ Enter a number between 0 and 9.";
        result.style.color = "#FF204E";
        return;
    }

    // Check result
    if (userNumber === luckyNumber) {
        result.innerHTML = "🎉 Congratulations! You Won!";
        result.style.color = "#7AE582";
    } else {
        result.innerHTML = `❌ You Lost! Lucky Number was <b>${luckyNumber}</b>`;
        result.style.color = "#FF204E";
    }

    // Generate a new lucky number for the next round
    luckyNumber = Math.floor(Math.random() * 10);

    // Clear input
    n.value = "";
    n.focus();
}

// Button click
click.addEventListener("click", checkLuckyNumber);

// Press Enter to play
n.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        checkLuckyNumber();
    }
});