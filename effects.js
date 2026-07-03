/* =====================================================
 effects.js
 Visual effects only
===================================================== */

// ---------------- FLOATING STARS ----------------
const particleContainer=document.getElementById("particles");

function createStar(){

    if(!particleContainer) return;

    const star=document.createElement("div");
    star.className="star";

    star.style.left=Math.random()*100+"vw";
    star.style.animationDuration=(5+Math.random()*8)+"s";
    star.style.opacity=Math.random();
    star.style.transform=`scale(${0.5+Math.random()*2})`;

    particleContainer.appendChild(star);

    setTimeout(()=>star.remove(),13000);
}

setInterval(createStar,250);

// ---------------- MOUSE GLOW ----------------
document.addEventListener("mousemove",(e)=>{

    let glow=document.getElementById("mouse-glow");

    if(!glow){
        glow=document.createElement("div");
        glow.id="mouse-glow";
        glow.style.cssText=`
position:fixed;
width:18px;
height:18px;
border-radius:50%;
background:rgba(180,140,255,.35);
pointer-events:none;
filter:blur(10px);
z-index:9999;`;
        document.body.appendChild(glow);
    }

    glow.style.left=e.clientX-9+"px";
    glow.style.top=e.clientY-9+"px";

});

/* Future:
- Confetti
- Gift opening animation
- Fireflies
- Butterflies
- Page turning animation
*/
