export function locationInfo() {
    const container = document.querySelector('#content');

    const para = document.createElement('p');
    para.classList.add('location-info');
    para.textContent = "1234 Maple Drive, CandyLand";
    container.appendChild(para);
}