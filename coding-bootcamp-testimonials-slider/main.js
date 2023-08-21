const p=document.querySelector("p");
const Name=document.querySelector(".name");
const title=document.querySelector(".title");
const nextBtn=document.querySelector(".swiper-btn-next");
const prevBtn=document.querySelector(".swiper-btn-prev");

function changeTestimonial(){
  if(Name.textContent=='Tanya Sinclair'){
    p.textContent='“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”'
    Name.textContent='John Tarkpor';
    title.textContent='Junior Front-end Developer';
  }
  else{
    p.textContent='“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”'
    Name.textContent='Tanya Sinclair';
    title.textContent='UX Engineer';
  }
}

nextBtn.addEventListener('click',changeTestimonial);
prevBtn.addEventListener('click',changeTestimonial);

//SWIPER
const swiper = new Swiper('.swiper', {
    loop: true,
  
    navigation: {
      nextEl: '.swiper-btn-next',
      prevEl: '.swiper-btn-prev',
    },
});