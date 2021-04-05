(function () {
    'use strict';

    window.addEventListener('load', function () {

        const newPassword = document.getElementById('new_password');
        const repeatPassword = document.getElementById('repeat_password');

        const urlParams = new URLSearchParams(window.location.search);
        const token = urlParams.get('token');

        class Reset {
            constructor(token, password) {
                this.token = token;
                this.new_password = password;
            }
        }

        async function resetPassword(url = '', data = {}) {
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
            return newPassword.value.length >= 6 && newPassword.value.length <= 32 && repeatPassword.value === newPassword.value;
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
                    let reset = new Reset(token, newPassword.value);
                    resetPassword('https://api.fraktus.app/reset-password', reset);
                }
            }, false);
        });


    }, false);


})();
