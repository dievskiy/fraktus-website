(function () {
    'use strict';

    window.addEventListener('load', function () {

        const email = document.getElementById('email');

        async function sendLink(url = '', data = {}) {
            await fetch(url, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer',
                body: JSON.stringify(data) // body data type must match "Content-Type" header
            }).then((response) => {
                if (response.ok) {
                    $('#popup-success').modal('show');
                } else {
                    $('#popup-fail').modal('show');
                }
            });
        }

        function validateData() {
            return email && email.value && email.value.length > 3;
        }

        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.getElementsByClassName('needs-validation');

        function showInvalidData() {
            $('#popup-fail').modal('show');
        }

        // Loop over them and prevent submission
        const validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                event.stopPropagation();
                form.classList.add('was-validated');
                if (form.checkValidity() === true) {
                    if (!validateData()) {
                        showInvalidData();
                        return;
                    }
                    sendLink('https://api.fraktus.app/password-recovery/' + email.value);
                }
            }, false);
        });


    }, false);


})();
