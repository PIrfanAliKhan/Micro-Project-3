const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".screen");
let input = "";

function updateScreen(value) {
    screen.value = value;
}

buttons.forEach(function(button) {
    button.addEventListener("click", function(e) {
        const buttonValue = e.target.dataset.num;

        if (button.classList.contains("numbers")) {
            input += buttonValue;
            updateScreen(input);
        } else if (button.classList.contains("symbols")) {
            if (input === "" && buttonValue !== "-") {
                return;
            } else {
                input += buttonValue;
                updateScreen(input);
            }
        } else if (button.classList.contains("equal")) {
            try {
                let result = eval(input);
                result = parseFloat(result.toFixed(3));
                input = result.toString();
                updateScreen(input);
            } catch (error) {
                updateScreen("Error");
                input = "";
            }
        } else if (button.classList.contains("clear") && !button.classList.contains("reset")) {
            input = input.slice(0, -1);
            updateScreen(input);
        } else if (button.classList.contains("reset")) {
            input = "";
            updateScreen(input);
        }
    });
});