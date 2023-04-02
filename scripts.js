eventlisteners();
function eventlisteners() {
    const formulario = document.querySelector('#formulario');
    const btnContacto = document.querySelector('.boton_header')
    const seccionContacto = document.querySelector('#contacto')

    btnContacto.addEventListener('click', () => {
        seccionContacto.scrollIntoView({behavior : "smooth"});
    })

    formulario.addEventListener('submit', validarFormulario)

    async function validarFormulario(e) {
        e.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const telefono = document.querySelector('#telefono').value;
        const email = document.querySelector('#email').value;
        const mensaje = document.querySelector('#mensaje').value;

        if (nombre === '' || telefono === '' || email === '' || mensaje === '') {
            mostrarAlerta('Todos los campos son obligatorios');

        } else {
            enviarFormulario()

            setTimeout(() => {
                reiniciarFormulario()
            }, 5000);
            
        }
        

    }

    function enviarFormulario() {

        const btn = document.getElementById('button');

        document.getElementById('formulario')
            .addEventListener('submit', function (event) {
                event.preventDefault();

                btn.value = 'Enviando...';

                const serviceID = 'default_service';
                const templateID = 'template_3jnaf9c';

                emailjs.sendForm(serviceID, templateID, this)
                    .then(() => {
                        btn.value = 'Enviar';
                        alert('Mensaje Enviado!');
                    }, (err) => {
                        btn.value = 'Enviar';
                        alert(JSON.stringify(err));
                    });
            });

    }

    function reiniciarFormulario() {
        formulario.reset()
    }

    function mostrarAlerta(mensaje) {
        const alerta = document.createElement('DIV');
        alerta.classList.add('alerta');
        const textoAlerta = document.createElement('P');
        textoAlerta.textContent = mensaje;
        textoAlerta.classList.add('mensaje');


        alerta.appendChild(textoAlerta);
        formulario.appendChild(alerta)

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}
