      const cards=[
    {image:"img/image1.png"},
    {image:"img/image2.png"},
    {image:"img/image3.png"},
    {image:"img/image4.png"},
    {image:"img/image5.png"},
    {image:"img/image6.png"},
    {image:"img/image7.png"},
    {image:"img/image8.png"}
   ];

let y=0;
let table=[];
let nb_click=0;
let last_clicked=0;
let wait=0;
let tds=[];
let finished=[];
let nb=0;
var flipContainer = document.getElementById("flipContainer");





const display = document.getElementById('display');
const startBtn = document.getElementById('flipContainerZ');




let startTime = 0;
let elapsedTime = 0;
let intervalId;

var test = document.getElementById("music"); 


var sin =document.getElementById("clickSound"); 


let ok =0;


function generateTable() {

test.loop = true; 
test.play();
    
flipContainer.style.display='inline-block';


  const tableBody = document.getElementById("image-table");
tableBody.innerHTML = ""; // Corrected typo from innerTML to innerHTML
let imageCounts = {};

for (let i = 0; i < 4; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < 4; j++) {
        const cell = document.createElement("td");
        let randomIndex = Math.floor(Math.random() * cards.length);
        let card = cards[randomIndex];

        while (imageCounts[card.image] >= 2) {
            randomIndex = Math.floor(Math.random() * cards.length);
            card = cards[randomIndex];
            table[y] = randomIndex;
        }
        
const flipContainer2 = document.createElement("div");
flipContainer2.classList.add("flip-container2");


flipContainer2.id = `flipContainer${y}`;


document.body.appendChild(flipContainer2); 

var divElement = document.getElementById(`flipContainer${y}`);

console.log('New id of the div element:', divElement.id);

        const flipper2= document.createElement("div");
        flipper2.classList.add("flipper2");

        const front2 = document.createElement("div");
        front2.classList.add("front2");

        const back2 = document.createElement("div");
        back2.classList.add("back2");

        const image = document.createElement("img");
        image.src = "img/blanc.png";
        table[y]=randomIndex;
        y=y+1;

        const blank = document.createElement("img");
        blank.src=card.image;
        back2.appendChild(blank);
        front2.appendChild(image);
        flipper2.appendChild(front2);
        flipper2.appendChild(back2);
        flipContainer2.appendChild(flipper2);
        cell.appendChild(flipContainer2);
        row.appendChild(cell);


        if (!imageCounts[card.image]) {
            imageCounts[card.image] = 1;
        } else {
            imageCounts[card.image]++;
        }
    }
    tableBody.appendChild(row);
}

    startChrono();
   
    
    tds=document.querySelectorAll('td .front2 img');

   

   for ( let w = 0; w < tds.length; w++) {
        var flipContainerA = document.getElementById('flipContainer' + (w));
        flipContainerA.classList.toggle('flipped2');
        }
    setTimeout(function() {
        for( let w = 0; w < tds.length; w++) {
            var flipContainerA = document.getElementById('flipContainer' + (w));
        flipContainerA.classList.toggle('flipped2');
            }
        },3000);
    
    
    for (let i = 0; i < tds.length; i++) {
        
        tds[i].addEventListener('click', function(event) {
            
            click_td(event, i);
           
        });
    }

   
}
    

let flipAttempts = 0; 
let totalFlips = 116; 



function victory(){
    clearInterval(intervalId);
    const finalScore = totalFlips - flipAttempts;
    const formattedTime = display.textContent;
    display.textContent = `Congratulations! You've won! \n Final Score: ${finalScore}\n Time: ${formattedTime}\n Flipped Attempts: ${flipAttempts}`;
    display.classList.add('victory-text');
    document.getElementById('retry').style.display = 'block';
    document.getElementById('retry').style.margin = '0  auto';
    document.getElementById('retry').style.marginTop = '30px';
    document.getElementById('retry').addEventListener('click', function () {location.reload();});

    document.querySelector('.big').classList.add('victory-table');
}




function click_td(event, index) {
    var flipContainerA = document.getElementById('flipContainer' + (index));
    var flipContainerB = document.getElementById('flipContainer' + (last_clicked));

    if(ok==1){victory();}


    if (wait == 0) {
        if (nb_click == 0) {
            sin.play();
            flipContainerA.classList.toggle('flipped2');
            nb_click = nb_click + 1;
            last_clicked = index;
            flipAttempts++;
        } else if (last_clicked != index && table[last_clicked] == table[index] ) {
            sin.play();
            flipContainerA.classList.toggle('flipped2');
            finished[nb] = last_clicked;
            nb = nb + 1;
            finished[nb] = index;
            nb = nb + 1;
            nb_click = 0;
            flipAttempts++;
            if (nb == 16 ) {victory();}
        } else if (table[last_clicked] != table[index] && !finished.includes(index) && !finished.includes(last_clicked)) {
            sin.play();
            flipContainerA.classList.toggle('flipped2');
            wait = 1;
            setTimeout(function () {
                flipContainerA.classList.toggle('flipped2');
                flipContainerB.classList.toggle('flipped2')
                wait = 0;
            }, 1000);
            nb_click = 0;
        }
    }
}




function startChrono() {
startTime = Date.now() - elapsedTime; // Get current time and adjust for elapsedTime
intervalId = setInterval(updateTime, 10); // Update every 10 milliseconds
startBtn.style.display = "none";
document.querySelector('.linko').style.display = "none";
display.style.display="inline";
}


function updateTime() {
const currentTime = Date.now();
elapsedTime = currentTime - startTime; // Update elapsed time

// Format the elapsed time into minutes and seconds
const minutes = Math.floor((elapsedTime / (60 * 1000)) % 60);
const seconds = Math.floor((elapsedTime / 1000) % 60);
const formattedTime =
(minutes < 10 ? '0' + minutes : minutes) + ':' +
(seconds < 10 ? '0' + seconds : seconds);
display.textContent = formattedTime;
}

let hov=document.getElementById("hoverSound");

let no=1;

startBtn.addEventListener('mouseleave', function(){

   

    startBtn.classList.remove('flippedZ');

});



startBtn.addEventListener('mouseover', function(){
    hov.play()
    startBtn.classList.add('flippedZ');  });


startBtn.addEventListener('click', generateTable);



