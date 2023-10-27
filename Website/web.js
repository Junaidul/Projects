// This is for the textarea in the FAQ section
const textarea = document.querySelector("textarea");

textarea.addEventListener("keyup" , (e) => {
    textarea.style.height = "20px";                 //This is the original value of textarea height
    let height = e.target.scrollHeight;             // Sets a new var to the scroll height
    textarea.style.height = `${height}px`;          // sets original value of textarea height to scroll height
});



//This is for the type writer effect
const h1 = document.querySelector('#buy');
const text = "Buy Your Dream Car With Us!";


function typeWriter(e , text , i = 0){
    if (i === 0){
        h1.textContent = '';
    }
    e.textContent += text[i];
    if (i === text.length - 1){
        return;
    }
    setTimeout(() => typeWriter(e , text , i + 1) , 200)
}



typeWriter(h1 , text)


