
//exemple trobat a interntet a "cookiecorporation.com" i adaptat al nostre cas

import { FormGroup } from '@angular/forms';


export function validarContrasenya(contrasenyaProfesor, confirmarContrasenyaProfesor) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[contrasenyaProfesor];
    const matchingControl = formGroup.controls[confirmarContrasenyaProfesor];

    if (matchingControl.errors && !matchingControl.errors.confirmarContrasenyaProfesor) {
      return;
    }

    // afeguim  la validació perque retorni un true si la validació no és correcte
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({
        validarContrasenya: true
      });
    } else {
      matchingControl.setErrors(null);
    }
  }
}
