const brands = ["Apple", "Nike", "Google", "Amazon", "Microsoft", "CocaCola", "Toyota", "Samsung", "Adobe", "Twitter", "Facebook", "Pepsi", "Sony", "Honda", "Vodafone", "Visa", "Intel", "Oracle", "Dell", "HP", "Canon", "Cisco", "Nikon", "Adidas", "Uber", "Tesla", "Ford", "BMW", "Mercedes", "Lexus", "Gucci", "H&M", "Zara", "Target", "Walmart", "Chanel", "Ferrari", "Lamborghini", "Audi", "Volvo", "Loreal", "Maybelline", "Puma", "Reebok", "Converse", "UnderArmour", "McDonalds", "BurgerKing", "KFC", "Starbucks", "Dunkin", "Vans", "Rolex", "Maserati", "Fossil", "Lego", "Spotify", "Netflix", "Disney", "Xerox", "Canon", "Sharp", "Dior", "Prada", "HugoBoss", "Yamaha", "Harley", "Snapchat", "Pinterest", "LinkedIn", "Slack", "Skype", "Razer", "Panasonic", "Philips", "Xiaomi", "Fitbit", "Lenovo", "Bose", "Gap", "Vogue", "NASA", "Nestle", "Snickers", "Sprite", "Volkswagen", "Kia", "Subaru", "Oakley", "RayBan", "Colgate", "Lays", "Dove", "Nutella", "Peugeot", "Airbnb", "PayPal", "Mastercard", "Verizon"];
const button = document.querySelectorAll("button");
const li = document.createElement("li");                           
const ul = document.querySelector(".word");
const keyboard = document.querySelector('.keyboard');
const wrong = document.querySelector('.wrong');
const head = document.querySelector('#head');
const line = document.querySelector('#line');
const right_hand = document.querySelector('#right-hand');
const left_hand = document.querySelector('#left-hand');
const right_leg = document.querySelector('#right-leg');
const left_leg = document.querySelector('#left-leg');
let running = true;
let correctWord = [];
let rand_brands = brands[Math.floor(Math.random() * brands.length)];
rand_brands = rand_brands.toUpperCase();
console.log(rand_brands);
           

for(i = 0; i < rand_brands.length; i++){
    let li = document.createElement("li");                        
    let ul = document.querySelector(".word");                                                                                                                
    ul.appendChild(li);
}

let x = 6;
function game(button , letterClicked){
    button.disabled = true;
    if (rand_brands.includes(letterClicked) & running){
        [...rand_brands].forEach((letter , index) => {
            if (letter === letterClicked){
                correctWord.push(letter);
                ul.querySelectorAll('li')[index].textContent = letter;

            }
        })
    }
    if (correctWord.length === rand_brands.length) {
        wrong.textContent = "You found the word!";
        let play_again = document.createElement('button');
        play_again.id = ('play_again');
        play_again.textContent = "PLAY AGAIN";
        wrong.append(play_again);
        play_again.addEventListener('click'  , () => {
            location.reload();
        });
        running = false;
    } 
    if (!rand_brands.includes(letterClicked) & x > 0 & running) {
        x--;
        wrong.textContent = `Wrong Guess!!! Try again! You have ${x} guesses left`;
        if (x < 6 & x > 4){
            pic_head = document.createElement('img');
            pic_head.src = "Parts/head.png";
            head.append(pic_head);
        }
        if (x < 5 & x > 3){
            pic_line = document.createElement('img');
            pic_line.src = "Parts/line.png";
            line.append(pic_line);
        }
        if (x < 4 & x > 2){
            pic_lefthand = document.createElement('img');
            pic_lefthand.src = "Parts/left-hand.png";
            left_hand.append(pic_lefthand);
        }
        if (x < 3 & x > 1){
            pic_righthand = document.createElement('img');
            pic_righthand.src = "Parts/hand.png";
            right_hand.append(pic_righthand);
        }
        if (x < 2 & x > 0){
            pic_rightleg = document.createElement('img');
            pic_rightleg.src = "Parts/hand.png";
            right_leg.append(pic_rightleg);
        }
        if (x < 1 & x > -1) {
        wrong.textContent = `You lose 😂 The word was: "${rand_brands}"`;
        let try_again = document.createElement('button');
        try_again.id = ('try_again');
        try_again.textContent = "TRY AGAIN";
        wrong.append(try_again);
        try_again.addEventListener('click'  , () => {
            location.reload();
        });
        pic_leftleg = document.createElement('img');
            pic_leftleg.src = "Parts/hand.png";
            left_leg.append(pic_leftleg);
        running = false;
    }
    }     
};


function make_button(){
    const keyboard = document.querySelector('.keyboard');
    
    let start = 'A';
    let end = 'Z';
    for( let i = start.charCodeAt(); i <= end.charCodeAt(); i++){
        let button = document.createElement('button');
        button.className = 'letter';
        button.textContent = String.fromCharCode(i);
        keyboard.appendChild(button);
        button.addEventListener('click' , e => game(e.target, String.fromCharCode(i)));
    }
};
make_button();
