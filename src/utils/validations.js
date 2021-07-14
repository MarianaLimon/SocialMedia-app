export function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

export  function isName(name) {
    var regex = /^[a-zA-ZáéíóúÁÉÍÓÚÑñ\s]*$/;
    return regex.test(name);
  }

export  function isNumber(number) {
    var regex = /^[0-9]*$/;
    return regex.test(number);
  }

export  function isSpace(campo) {
    var regex = /^\s+|\s/;
    return regex.test(campo);
  }

export  const allowLetters = (event) => {
    if (/[0-9+*%@#$&?=+_]/g.test(event.currentTarget.value)) {
      event.currentTarget.value = event.currentTarget.value.replace(
        /[0-9+*%@#$&?=+_]/g,
        ""
      );
    }
  };

export  const allowNumbers = (event) => {
    if (/^[0-9]*$/.test(event.currentTarget.value)) {
      event.currentTarget.value = event.currentTarget.value.replace(
        /^[0-9]*$/,
        ""
      );
    }
  };  