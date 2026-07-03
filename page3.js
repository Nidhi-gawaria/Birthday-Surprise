// page 3 //
/* ==========================================================
   PAGE 3 - Seven Reasons Why You're Amazing
   JavaScript
========================================================== */

/* ==========================================================
   MESSAGES
   Edit these with your own words.
========================================================== */
document.addEventListener("DOMContentLoaded", () => {
const reasons = [

`Reason #1

Life has been very tough with you but you never gave up .`,

`Reason #2

Because you have the most beautiful voice .`,

`Reason #3

Because you are kind to everyone , sometimes you might not show it but you are so kind. `,

`Reason #4

Because you always try your level best for everthing.`,

`Reason #5

Because you are the prettiest and the most beautiful person.`,

`Reason #6

Because you might get angry but you try to understand other people fully.`,

`Reason #7

This one might sound stupid but Because I love you a lot . 💜`

];


/* ==========================================================
   ELEMENTS
========================================================== */

const flowers = document.querySelectorAll(".flower");

const messageCard = document.querySelector(".message-card");

const closeButton = document.querySelector(".close-card");

const reasonTitle = document.getElementById("reason-title");

const reasonText = document.getElementById("reason-text");

const completionMessage =
document.querySelector(".completion-message");


/* ==========================================================
   TRACK OPENED FLOWERS
========================================================== */

let openedFlowers = new Set();


/* ==========================================================
   FLOWER CLICK
========================================================== */

flowers.forEach((flower)=>{

    flower.addEventListener("click",()=>{

        const index = Number(flower.dataset.id);

        /* Change popup title */

        reasonTitle.textContent = `Reason ${index+1}`;

        /* Change popup message */

        reasonText.textContent = reasons[index];

        /* Show popup */

        messageCard.classList.remove("hidden");

        /* Mark flower as opened */

        flower.classList.add("opened");

        openedFlowers.add(index);

        /* All flowers opened */

        if(openedFlowers.size === flowers.length){

            setTimeout(()=>{

                completionMessage.classList.remove("hidden");

            },400);

        }

    });

});


/* ==========================================================
   CLOSE POPUP
========================================================== */

closeButton.addEventListener("click",()=>{

    messageCard.classList.add("hidden");

});


/* ==========================================================
   CLOSE POPUP WHEN CLICKING OUTSIDE
========================================================== */

window.addEventListener("click",(event)=>{

    if(event.target === messageCard){

        messageCard.classList.add("hidden");

    }

});


/* ==========================================================
   OPTIONAL:
   RESET FUNCTION
   (Useful while testing)
========================================================== */

function resetReasons(){

    openedFlowers.clear();

    flowers.forEach((flower)=>{

        flower.classList.remove("opened");
        console.log("Flower clicked!");

    });

    completionMessage.classList.add("hidden");

}

/* ==========================================================
   END OF PAGE 3
========================================================== */
});