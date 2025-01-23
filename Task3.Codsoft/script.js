window.onload = function () {
    const input = document.getElementById("inputBox");

    document.querySelector(".buttons").addEventListener("click", function (e) {
        if (e.target.tagName === "BUTTON") {
            const buttonId = e.target.id;
            handleButtonClick(buttonId);
        }
    });
    
    function handleButtonClick(buttonId) {
        if (buttonId === "ButtonC") {
            clearInput();
        } else if (buttonId === "Button=") {
            calculateResult();
        } else {
            appendToInput(buttonId.replace("Button", ""));
        }
    }

    function appendToInput(value) {
        input.value += value;
    }

    function calculateResult() {
        try {
            input.value = eval(input.value.replace("x", "*"));
        } catch {
            input.value = "Error";
        }
    }

    function clearInput() {
        input.value = "";
    }
};
