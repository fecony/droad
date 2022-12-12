// TODO: custom auth logic and page

// import signup from '@wasp/auth/signup.js';

// const SignupPage = () => {
//   return <h1>Signup page</h1>;
// };

// export default SignupPage;

import { Link } from 'react-router-dom'
import SignupForm from '@wasp/auth/forms/Signup'
import AuthLayout from '../../components/layouts/AuthLayout';

const SignupPage = () => {
  return (
    <AuthLayout>
      <SignupForm/>

      <br/>

      <span>
        I already have an account (<Link to="/login">go to login</Link>).
      </span>
    </AuthLayout>
  )
}

export default SignupPage
