import React from 'react';

function LoginForm() {
    return (
     <form>
        <label>
            Email:
          <input type="email" name="email" />
        </label>
        <label>
            Contraseña:
          <input type="password" name="password" />
        </label>
        <button type="button">Entrar </button>
     </form>
    );
}

export default LoginForm;