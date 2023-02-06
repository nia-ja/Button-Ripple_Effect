const buttons = document.querySelectorAll(".ripple");

buttons.forEach(button => {
    button.addEventListener("click", e => {
        // Get coordinates of the click event
        const x = e.clientX;
        const y = e.clientY;

        //Get coordinates of the button on the screen
        const buttonTop = e.target.offsetTop;
        const buttonLeft = e.target.offsetLeft;

        // Get coordinates of the click event inside the button
        const xInside = x - buttonLeft;
        const yInside = y - buttonTop;

        // Create span
        const span = document.createElement("span");
        span.classList.add("circle");
    
        // Set style of the span element to "top: ${}; left: ${}"
        span.style.top = `${yInside}px`;
        span.style.left = `${xInside}px`;
    
        // append span
        button.appendChild(span);

        setTimeout(() => span.remove(), 500);
    }); 

})



