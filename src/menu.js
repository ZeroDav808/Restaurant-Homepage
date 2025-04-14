export function menuInfo(){
    const container = document.querySelector('#content');

    const para = document.createElement('p');
    para.classList.add('menu-info');
    para.textContent = "GLizzys for days";
    container.appendChild(para);
}