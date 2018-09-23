import React from 'react';

function SignupForm() {
    return (
     <form>
        <label>
            Name:
          <input type="text" name="username" />
        </label>
        <label>
            Documento id:
          <input type="text" name="document" />
        </label>
        <label>
            Email:
          <input type="email" name="email" />
        </label>
        <label>
            Contraseña:
          <input type="password" name="password" />
        </label>
        <button type="button">Registrarse </button>
     </form>
    );
}

export default SignupForm;