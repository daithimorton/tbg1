function submitCommand(ele) {
    if (event.key === "Enter") {
        const command = ele.value.trim();

        const initialCommand = `\n> ${command}`;
        printToConsole(initialCommand);

        // clear the input when submitted
        ele.value = "";

        const message = processCommand(command);
        printToConsole(message);

        scrollToBottomOfConsole()
    }
}

function focusInput() {
    document.querySelector("#command-input").focus();
}

function processCommand(command) {
    if (!command) return "";

    let output = "\n";

    // TODO send command to remote service for processing
    switch (command.toLowerCase()) {
        case "hello":
            output += "hi there";
            break;
        default:
            output += `Unknown command: ${command}`;
            break;
    }

    return output;
}

function printToConsole(message) {
    const consoleText = document.querySelector(".console-text");
    consoleText.appendChild(document.createTextNode(message));
}

function scrollToBottomOfConsole() {
    const textContainer = document.querySelector(".text-container");
    textContainer.scrollIntoView(false);
}

window.onload = function () {
    focusInput()
}