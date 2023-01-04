const numA = document.getElementById('campoA');
const numB = document.getElementById('campoB');
const messageError = document.getElementById('message');
messageError.style.display = 'none';
const form = document.getElementById('form-validacao');

function validaForm(){
    let valida = numB.value > numA.value;
    return valida;
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let formValido = false;
    formValido = validaForm();

    if (formValido) {
        messageError.innerHTML = `Formulário <b>VÁLIDO</b></br>(${numB.value} é maior que ${numA.value})`;
        messageError.style.display = 'block';
        messageError.style.border = '2px solid green';
    } else {
        messageError.style.display = 'block';
        messageError.style.border = '2px solid red';

        messageError.innerHTML = `Formulário <b>INVÁLIDO</b></br>(${numB.value} é menor que ${numA.value})`;
    }
})



