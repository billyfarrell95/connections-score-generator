const infoBtn = document.getElementById('info-btn');
const accordionTitle = document.getElementById('accordion-title');
const accordionContent = document.getElementById('accordion-content');

infoBtn.addEventListener('click', ()=> {
    accordionTitle.classList.toggle('open');
    accordionContent.classList.toggle('d-none');
    accordionContent.classList.toggle('open');
})