(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        const validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                event.stopPropagation();
                form.classList.add('was-validated');
                if (form.checkValidity() === true) {
                    sendMessage(composeMessage());
                }
            }, false);
        });
    }, false);
})();

class Message {
    name;
    email;
    message;

    constructor(name, email, message) {
        this.name = name;
        this.email = email;
        this.message = message;
    }
}

function composeMessage() {
    const name = $('#inputName').val();
    const email = $('#inputEmail').val();
    const message = $('#inputTextarea').val();
    return new Message(name, email, message)
}

async function sendMessage(message) {
    fetch('https://fraktus.app/api/send-message', {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(message),
    }).then((response) => {
        return new Promise((resolve) => response.json()
            .then((json) => resolve({
                status: response.status,
                ok: response.ok,
                json,
            })));
    }).then(({status, json, ok}) => {
        if (ok) {
            $('#popup-success').modal('show');
        } else {
            $('#popup-fail').modal('show');
        }
    })
}
