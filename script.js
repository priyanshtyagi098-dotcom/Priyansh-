// Loading Screen
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";

        setTimeout(() => {
            loader.style.display = "none";
        }, 600);

    }, 1200);
});

// Typing Effect
const text = [
    "Frontend Developer",
    "UI Designer",
    "JavaScript Learner",
    "Freelancer"
];

let index = 0;
let char = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const word = text[index];

    if(!deleting){
        typing.textContent = word.substring(0,char++);
    }else{
        typing.textContent = word.substring(0,char--);
    }

    let speed = deleting ? 60 : 120;

    if(!deleting && char > word.length){
        deleting = true;
        speed = 1500;
    }

    if(deleting && char < 0){
        deleting = false;
        index = (index + 1) % text.length;
    }

    setTimeout(typeEffect, speed);
}

typeEffect();

// Floating Particles
const particles = document.getElementById("particles");

for(let i=0;i<35;i++){

    const p = document.createElement("span");

    const size = Math.random()*8+4;

    p.style.position="absolute";
    p.style.width=size+"px";
    p.style.height=size+"px";
    p.style.borderRadius="50%";
    p.style.background="rgba(255,255,255,.25)";
    p.style.left=Math.random()*100+"%";
    p.style.top=Math.random()*100+"%";

    p.style.animation=`float ${6+Math.random()*8}s linear infinite`;

    particles.appendChild(p);

}

const style=document.createElement("style");

style.innerHTML=`
@keyframes float{

0%{
transform:translateY(0px);
opacity:.2;
}

50%{
opacity:1;
}

100%{
transform:translateY(-100vh);
opacity:0;
}

}
`;

document.head.appendChild(style);

// Scroll Animation
const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.animate([
{
opacity:0,
transform:"translateY(60px)"
},
{
opacity:1,
transform:"translateY(0)"
}
],{
duration:900,
fill:"forwards"
});

}

});

});

document.querySelectorAll("section").forEach(section=>{
observer.observe(section);
});
