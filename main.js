/* =====================================================
 main.js
 Core website logic
===================================================== */

// ---------------- PASSWORD ----------------
const correctPassword="purple0607"; // <-- CHANGE THIS

const passwordScreen=document.getElementById("password-screen");
const book=document.getElementById("book");
const unlockBtn=document.getElementById("unlock-btn");
const passwordInput=document.getElementById("password");
const passwordMessage=document.getElementById("password-message");
const music=document.getElementById("bg-music");

// ---------------- BOOK PAGES ----------------
const pages=document.querySelectorAll(".book-page");
let currentPage=0;

function showPage(index){
    pages.forEach(p=>p.classList.remove("active"));
    currentPage=Math.max(0,Math.min(index,pages.length-1));
    pages[currentPage].classList.add("active");
}

function unlockBook(){
    if(passwordInput.value.trim()!==correctPassword){
        passwordMessage.textContent="Wrong Password 💜";
        passwordMessage.style.color="crimson";
        return;
    }

    passwordMessage.textContent="Unlocked ✨";
    passwordMessage.style.color="green";

    passwordScreen.style.opacity="0";

    setTimeout(()=>{
        passwordScreen.style.display="none";
        book.classList.remove("hidden");
        showPage(0);

        if(music){
            music.volume=.3;
            music.play().catch(()=>{});
        }
    },700);
}

unlockBtn?.addEventListener("click",unlockBook);
passwordInput?.addEventListener("keydown",e=>{
    if(e.key==="Enter") unlockBook();
});

// ---------------- NAVIGATION ----------------
document.querySelectorAll(".next-btn").forEach(btn=>{
    btn.addEventListener("click",()=>showPage(currentPage+1));
});

document.querySelectorAll(".prev-btn").forEach(btn=>{
    btn.addEventListener("click",()=>showPage(currentPage-1));
});
