let result = document.querySelector(".result")

let buttons = Array.from(document.querySelectorAll(".btn"))
buttons.map((button) => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case "AC":
                result.innerHTML = "0"
                break;
            case "=":
                try {
                    result.innerText = eval(result.innerText)

                } catch (error) {
                    result.innerText = "Error!"
                }
                break;
            case "%":
                let passedText = result.innerText + "/100";
                result.innerText = eval(passedText)
                break;
            case "+/-":
                let changeText = result.innerText + "*-1";
                result.innerText = eval(changeText)
                break;
            default:
                if (result.innerText === "0" && e.target.innerText !== ".") {
                    result.innerText = e.target.innerText

                } else {
                    result.innerText += e.target.innerText
                }
                break;
        }
    })
})



