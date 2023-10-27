const div = document.querySelector('.text');
const text = "Hi how are you doing?";


function tte (element, text, i=0){
    if (i === 0)
        div.textContent = '';
    element.textContent += text[i];
    if (i === text.length-1){
        return;
    }

    setTimeout(() => tte(element , text , i + 1) , 300);

    
}


tte(div , text);