
// llamando los componentes que necesitamos
const recipiente = document.querySelector('#recipiente');
const boton = document.querySelector('button');
const input = document.querySelector('.btn-dark');
const form = document.querySelector('.formulario');
const alerta_acertada = document.querySelector('.alert-success');
const alerta_denegada = document.querySelector('.alert-danger');
const numero = document.querySelector('#numero')
// funcion de acertacion de numero aleatorio
function generar_numero() {

    let numero_aleatorio = Math.floor(Math.random() * 10)

    numero.textContent = numero_aleatorio;

    if (parseInt(input.value) == numero_aleatorio.toFixed(2)){
        alerta_acertada.classList.remove('d-none');
        
        alerta_denegada.classList.add('d-none');

        console.log('siiiiuuuu');
    } else {
        alerta_acertada.classList.add('d-none');

        alerta_denegada.classList.remove('d-none');

        console.log('noooououu');
    }
    console.log(numero_aleatorio.toFixed())
}


// evento click para ver si acerto el numero si o no
boton.addEventListener('click', (e) => {
    e.preventDefault()
    
    generar_numero()
    recipiente.textContent = input.value;


    form.reset()
})