const customValidator = (() => {

  function addEmailValidation() {
    const form = document.getElementById('custom-form');
    const email = document.getElementById('email');

    email.addEventListener('input', () => {
      email.setCustomValidity('');
      email.checkValidity();
    });

    email.addEventListener('invalid', () => {
      email.setCustomValidity("That's not a proper email!");
    });

    form.addEventListener('submit', () => {

      if (!email.validity.valid) {
        email.setCustomValidity('Improper email.');
        event.preventDefault();
      }
    });
  }

  function addEmailConfirmationValidation() {
    const form = document.getElementById('custom-form');
    const email = document.getElementById('email');
    const emailConf = document.getElementById('email-confirmation');

    emailConf.addEventListener('input', () => {
      emailConf.setCustomValidity('');
      emailConf.checkValidity();
    });

    emailConf.addEventListener('invalid', () => {
      emailConf.setCustomValidity('Must match your email.');
    });

    form.addEventListener('submit', () => {
      if (emailConf.value !== email.value) {
        emailConf.setCustomValidity('Must match your email.');
        event.preventDefault();
      }
    });
  }

  function addCountryValidation() {
    const form = document.getElementById('custom-form');
    const country = document.getElementById('country');

    country.addEventListener('input', () => {
      country.setCustomValidity('');
      country.checkValidity();
    });

    country.addEventListener('invalid', () => {
      country.setCustomValidity('Invalid country name.');
    });

    form.addEventListener('submit', () => {
      if (!country.validity.valid) {
        country.setCustomValidity('Invalid country name.');
        event.preventDefault();
      }
    });
  }

  function addZipValidation() {
    const form = document.getElementById('custom-form');
    const zip = document.getElementById('zip-code');

    zip.addEventListener('input', () => {
      zip.setCustomValidity('');
      zip.checkValidity();
    });

    zip.addEventListener('invalid', () => {
      zip.setCustomValidity('Improper 5 digit zip code.');
    });

    form.addEventListener('submit', () => {
      if (!zip.validity.valid) {
        zip.setCustomValidity('Improper 5 digit zip code.');
        event.preventDefault();
      }
    });
  }

  function addPasswordValidation() {
    const form = document.getElementById('custom-form');
    const pass = document.getElementById('password');

    pass.addEventListener('input', () => {
      pass.setCustomValidity('');
      pass.checkValidity();
    });

    pass.addEventListener('invalid', () => {
      pass.setCustomValidity('Password must contain a minimum of 8 characters and only alphanumeric characters.');
    });

    form.addEventListener('submit', () => {

      if (!pass.validity.valid) {
        pass.setCustomValidity('Improper password.');
        event.preventDefault();
      }
    });
  }

  function addPasswordConfirmationValidation() {
    const form = document.getElementById('custom-form');
    const pass = document.getElementById('password');
    const passConf = document.getElementById('password-confirmation');

    passConf.addEventListener('input', () => {
      passConf.setCustomValidity('');
      passConf.checkValidity();
    });

    passConf.addEventListener('invalid', () => {
      passConf.setCustomValidity('Must match your password.');
    });

    form.addEventListener('submit', () => {
      if (passConf.value !== pass.value) {
        passConf.setCustomValidity('Must match your password.');
        event.preventDefault();
      }
    });
  }

  function addValidations() {
    addEmailValidation();
    addEmailConfirmationValidation();
    addCountryValidation();
    addZipValidation();
    addPasswordValidation();
    addPasswordConfirmationValidation();
  }

  return { addValidations };

})();


// Handle on DOM load
document.addEventListener('DOMContentLoaded', function(event) {
  customValidator.addValidations();
});