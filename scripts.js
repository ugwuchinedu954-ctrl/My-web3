const ada_link=document.querySelector('.ada');
const m_container=document.querySelector('.mcontainer'); 
const m_stone=document.querySelector('.mstone');

m_stone.addEventListener('click', () => {
    ada_link.classList.add('active');
});
m_container.addEventListener('click', () => {
    ada_link.classList.remove('active');
});