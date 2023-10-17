// This is for the textarea in the FAQ section
const textarea = document.querySelector("textarea");

textarea.addEventListener("keyup" , (e) => {
    textarea.style.height = "20px";                 //This is the original value of textarea height
    let height = e.target.scrollHeight;             // Sets a new var to the scroll height
    textarea.style.height = `${height}px`;          // sets original value of textarea height to scroll height
});



