// TODO: custom auth logic and page

// import login from '@wasp/auth/login.js';

// const LoginPage = () => {
//   return <h1>Login page</h1>;
// };

// export default LoginPage;

import { Link } from 'react-router-dom'
import LoginForm from '@wasp/auth/forms/Login'
import AuthLayout from '../../components/layouts/AuthLayout';

const LoginPage = () => {
  return (
    <AuthLayout>
      <LoginForm/>
      
      <br/>

      <span>
        I don't have an account yet (<Link to="/signup">go to signup</Link>).
      </span>
    </AuthLayout>
  )
}

export default LoginPage
