/* ==========================================================
   PAGE 5 - BTS SCRAPBOOK
   JavaScript
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       POPUP MESSAGES
       Replace these with your own messages
    ========================================== */

    const photoMessages = [

        {
            title: "BTS 💜",
            message: "I know you love bts soo much so I made it bts theme for you baby."
        },

        {
            title: "Purple Memories",
            message: "Every song has a memory. Every memory has a smile."
        },

        {
            title: "Music & Magic",
            message: "I hope BTS always gives you the same comfort they've always given you."
        },

        {
            title: "Forever OT7",
            message: "No matter where life goes, OT7 forever. 💜"
        },

        {
            title: "Always Together",
            message: "May your playlist always be filled with happiness."
        },

        {
            title: "Happy Birthday 💜",
            message: "This page was made especially because I know how much they mean to you. I know how much you love them so this theme was specially designes like this."
        }

    ];


    /* ==========================================
       ELEMENTS
    ========================================== */

    const cards = document.querySelectorAll(".polaroid");

    const popup = document.getElementById("photo-popup");

    const popupImage = document.getElementById("popup-image");

    const popupTitle = document.getElementById("popup-title");

    const popupMessage = document.getElementById("popup-message");

    const closeButton = document.getElementById("close-popup");


    /* ==========================================
       CLICK PHOTO
    ========================================== */

    cards.forEach(card => {

        card.addEventListener("click", () => {

            const id = Number(card.dataset.photo);

            const image = card.querySelector("img");

            popupImage.src = image.src;

            popupTitle.textContent = photoMessages[id].title;

            popupMessage.textContent = photoMessages[id].message;

            popup.classList.remove("hidden");

        });

    });


    /* ==========================================
       CLOSE BUTTON
    ========================================== */

    closeButton.addEventListener("click", () => {

        popup.classList.add("hidden");

    });


    /* ==========================================
       CLOSE WHEN CLICKING DARK AREA
    ========================================== */

    popup.addEventListener("click", (event) => {

        if(event.target === popup){

            popup.classList.add("hidden");

        }

    });


    /* ==========================================
       ESC KEY CLOSE
    ========================================== */

    document.addEventListener("keydown", (event)=>{

        if(event.key === "Escape"){

            popup.classList.add("hidden");

        }

    });

});