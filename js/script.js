const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      menuItems = document.querySelectorAll('.menu__link'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        menu.classList.remove('active');
    })
})

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const elements = document.querySelectorAll('.rating__elem');
elements.forEach((elem) => {
    const percentDiv = elem.querySelector('.rating__percent');
    const yellowScale = elem.querySelector('.rating__yellow-scale');
    yellowScale.style.width = percentDiv.textContent;
});