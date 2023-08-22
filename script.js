//js for the mobile navbar

const hamburg=document.querySelector(".hamburg-icon");
const close=document.querySelector(".close-icon");
const navLinks=document.querySelector(".nav-links");
const navItem=document.getElementsByClassName("list-item");

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
