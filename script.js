//js for the mobile navbar

const hamburg=document.querySelector(".hamburg-icon");
const close=document.querySelector(".close-icon");
const navLinks=document.querySelector(".nav-links");
const navItem=document.getElementsByClassName("list-item");
const themeSwitcher=document.getElementById("theme-switcher");

// for theme switcher
themeSwitcher.addEventListener('click',()=>{
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        themeSwitcher.src="portfolio-images/sun.png";
    }
    else{
        themeSwitcher.src="portfolio-images/moon.png";
    }
});

hamburg.addEventListener('click',()=>{
    navLinks.classList.add('active');
    close.classList.add('show');
});

// navbar closes when we click on an item
Array.from(navItem).forEach((element)=>{
    element.addEventListener('click',()=>{
        navLinks.classList.remove('active');
        close.classList.remove('show');
    });
});

close.addEventListener('click',()=>{
    navLinks.classList.remove('active');
    close.classList.remove('show');
});
