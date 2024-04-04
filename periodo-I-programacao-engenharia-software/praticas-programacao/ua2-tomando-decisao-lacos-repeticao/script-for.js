let numeroTab = Number(prompt('Informe a tabuada'));
let baseTab = document.getElementById('base-tab');
document.getElementById('numero-titulo').innerHTML = numeroTab;



for (let i = 0; i <= 10; i++) {

    baseTab.innerHTML += `<li>${numeroTab} x ${i} = ${numeroTab * i}</li>`;
}
