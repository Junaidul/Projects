const animals = ["Aardvark","Albatross","Alligator","Alpaca","Ant","Anteater","Antelope","Ape","Armadillo","Donkey","Baboon","Badger","Barracuda","Bat","Bear","Beaver","Bee","Bison","Boar","Buffalo","Butterfly","Camel","Capybara","Caribou","Cassowary","Cat","Caterpillar","Cattle","Chamois","Cheetah","Chicken","Chimpanzee","Chinchilla","Chough","Clam","Cobra","Cockroach","Cod","Cormorant","Coyote","Crab","Crane","Crocodile","Crow","Curlew","Deer","Dinosaur","Dog","Dogfish","Dolphin","Dotterel","Dove","Dragonfly","Duck","Dugong","Dunlin","Eagle","Echidna","Eel","Eland","Elephant","Elk","Emu","Falcon","Ferret","Finch","Fish","Flamingo","Fly","Fox","Frog","Gaur","Gazelle","Gerbil","Giraffe","Gnat","Gnu","Goat","Goldfinch","Goldfish","Goose","Gorilla","Goshawk","Grasshopper","Grouse","Guanaco","Gull","Hamster","Hare","Hawk","Hedgehog","Heron","Herring","Hippopotamus","Hornet","Horse","Human","Hummingbird","Hyena","Ibex","Ibis","Jackal","Jaguar","Jay","Jellyfish","Kangaroo","Kingfisher","Koala","Kookabura","Kouprey","Kudu","Lapwing","Lark","Lemur","Leopard","Lion","Llama","Lobster","Locust","Loris","Louse","Lyrebird","Magpie","Mallard","Manatee","Mandrill","Mantis","Marten","Meerkat","Mink","Mole","Mongoose","Monkey","Moose","Mosquito","Mouse","Mule","Narwhal","Newt","Nightingale","Octopus","Okapi","Opossum","Oryx","Ostrich","Otter","Owl","Oyster","Panther","Parrot","Partridge","Peafowl","Pelican","Penguin","Pheasant","Pig","Pigeon","Pony","Porcupine","Porpoise","Quail","Quelea","Quetzal","Rabbit","Raccoon","Rail","Ram","Rat","Raven","Red deer","Red panda","Reindeer","Rhinoceros","Rook","Salamander","Salmon","Sand Dollar","Sandpiper","Sardine","Scorpion","Seahorse","Seal","Shark","Sheep","Shrew","Skunk","Snail","Snake","Sparrow","Spider","Spoonbill","Squid","Squirrel","Starling","Stingray","Stinkbug","Stork","Swallow","Swan","Tapir","Tarsier","Termite","Tiger","Toad","Trout","Turkey","Turtle","Viper","Vulture","Wallaby","Walrus","Wasp","Weasel","Whale","Wildcat","Wolf","Wolverine","Wombat","Woodcock","Woodpecker","Worm","Wren","Yak","Zebra"];
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
let rand_animal = animals[Math.floor(Math.random() * animals.length)];
rand_animal = rand_animal.toUpperCase();
console.log(rand_animal);
           

for(i = 0; i < rand_animal.length; i++){
    let li = document.createElement("li");                           
    let ul = document.querySelector(".word");                                                                                                                
    ul.appendChild(li);
}

let x = 6;

function game(button, letterClicked){
    button.disabled = true;
    if (rand_animal.includes(letterClicked) & running){
        [...rand_animal].forEach((letter , index) => {
            if (letter === letterClicked){
                correctWord.push(letter);
                ul.querySelectorAll('li')[index].textContent = letter;

            }
        })
    }
    if (correctWord.length === rand_animal.length) {
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
    if (!rand_animal.includes(letterClicked) & x > 0 & running) {
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
        wrong.textContent = `You lose 😂 The word was: "${rand_animal}"`;
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
