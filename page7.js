/* ==========================================================
   PAGE 7
   A FEW LITTLE GIFTS
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================================
       GIFTS DATA
       Change these messages to your own
    ====================================================== */

    const gifts = [

        {
            title: "🤗 A Warm Hug",
            message: "Whenever you're feeling low, imagine I'm giving you the biggest hug ever."
        },

        {
            title: "💜 BTS Time",
            message: "May every BTS song always make your heart feel a little lighter."
        },

        {
            title: "🌸 A Compliment",
            message: "You're one of the sweetest and strongest people I've ever met."
        },

        {
            title: "✨ A Memory",
            message: "Thank you for every late-night conversation and every laugh we've shared."
        },

        {
            title: "🎂 Birthday Wish",
            message: "I hope this year surprises you with happiness you never expected. And you always keep smilling "
        },

        {
            title: "🤝 A Promise",
            message: "No matter where life takes us, I'll always cheer for you with all my strength. And I will always pray for you even if I dont believe in god."
        }

    ];


    /* ======================================================
       SELECT ELEMENTS
    ====================================================== */

    const giftBoxes = document.querySelectorAll(".gift-box:not(.final-gift)");

    const popup = document.querySelector(".gift-popup");

    const popupTitle = document.getElementById("giftTitle");

    const popupMessage = document.getElementById("giftMessage");

    const closeButton = document.getElementById("closeGift");

    const finalGift = document.getElementById("finalGift");

    const finalMessage = document.querySelector(".final-message");

    const finalButton = document.getElementById("goToPage8");


    /* ======================================================
       TRACK OPENED GIFTS
    ====================================================== */

    let opened = 0;

    const openedGift = [];


    /* ======================================================
       OPEN NORMAL GIFTS
    ====================================================== */

    giftBoxes.forEach((gift) => {

        gift.addEventListener("click", () => {

            const index = Number(gift.dataset.gift);

            if (openedGift[index]) return;

            openedGift[index] = true;

            opened++;

            gift.classList.add("opened");

            popupTitle.textContent = gifts[index].title;

            popupMessage.textContent = gifts[index].message;

            popup.classList.remove("hidden");

            checkFinalGift();

        });

    });


    /* ======================================================
       CLOSE POPUP
    ====================================================== */

    closeButton.addEventListener("click", () => {

        popup.classList.add("hidden");

    });

    popup.addEventListener("click", (e) => {

        if (e.target === popup) {

            popup.classList.add("hidden");

        }

    });


    /* ======================================================
       CHECK FINAL GIFT
    ====================================================== */

    function checkFinalGift() {

     if (opened === 6) {

    finalGift.classList.remove("locked");

    finalGift.querySelector(".lock-text").textContent =
        "💜 Click Me";

    finalGift.style.animation =
        "bounceGift 1s infinite";

    // Show the normal Next button
    document.getElementById("page7Next").classList.remove("hidden");

}

    }


    /* ======================================================
       FINAL GIFT
    ====================================================== */

    finalGift.addEventListener("click", () => {

    if(finalGift.classList.contains("locked")){

        return;

    }

    popupTitle.textContent = "🎁 Final Gift";

    popupMessage.innerHTML = `
        You've opened every little gift. 💜
        <br><br>
        The final page is waiting for you...
    `;

    popup.classList.remove("hidden");

});


    /* ======================================================
       GO TO PAGE 8
       Change this if your page navigation is different.
    ====================================================== */

  if (finalButton) {

    finalButton.addEventListener("click", () => {

        showPage(currentPage + 1);

    });

}

});