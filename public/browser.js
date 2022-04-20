document.addEventListener("click", function(e) {
    if(e.target.classList.contains("edit-me")) {
        let userInput = prompt("Enter your desired new text")
        axios.post('/update-item',{text: userInput}).then().catch()
    }
})