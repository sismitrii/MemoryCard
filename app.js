const allCard = document.querySelectorAll(".carte");
const input = document.querySelector("input");

let tab =[];

//allCard[4].style.order = -1;

generateRandomOrder();
for (let i=0; i< tab.length; i++){
    allCard[i].style.order = tab[i];
};

allCard.forEach(card =>{
    card.setAttribute('data-isactive', false);
    
    // Pour retourner une carte
    card.addEventListener('click', function(){
        if (card.dataset.isactive === "false"){
            const allActiveCard = document.querySelectorAll(".active");
            if (allActiveCard.length !== 2){
                card.classList.add("active");
                card.setAttribute('data-isactive', "true");
                console.log(card.dataset.isactive);
            }
            const allActiveCardR = document.querySelectorAll(".active");
            if (allActiveCardR.length === 2){
                console.log(allActiveCard);
                // check s'il ont les memes attributs, la classe isAlwaysActive permet de les laisser visible
                if (allActiveCardR[0].dataset.attr === allActiveCardR[1].dataset.attr){
                    allActiveCardR[0].classList.add("isAlwaysActive");
                    allActiveCardR[1].classList.add("isAlwaysActive");
                }

                //apres 3s la classe active est retiré
                const myTimeout = setTimeout(function(){
                    allActiveCardR.forEach(card =>{
                    card.classList.remove("active");
                    card.setAttribute('data-isactive', "false");
                });}, 3000);

            }
        } else {
        card.classList.remove("active");
        card.setAttribute('data-isactive', "false");
        console.log(card.dataset.isactive);
        }
    });

});



function generateRandomOrder() {
    let alreadyIn = false;
    tab.push(Math.floor(Math.random() * 12) + 1);
    while (tab.length != 12) {
        let numb = Math.floor(Math.random() * 12) + 1;
        for (let i=0; i<tab.length; i++){
            if (tab[i] === numb){
                alreadyIn = true;
            }
        }
        if (alreadyIn === false) {
            tab.push(numb);
        }
        alreadyIn = false;
    }
}