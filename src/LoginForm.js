import React from 'react';

function LoginForm() {
    return (
     <div className="Form">
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
     </div>
    );
}

export default LoginForm;