import { Link } from "react-router-dom";
import login from "@wasp/auth/login.js";
import AuthLayout from "../../components/layouts/AuthLayout";

const LoginPage = () => {
    const handleSubmit = async (fields: {
        username: string;
        password: string;
    }): Promise<void> => {
        const { username, password } = fields;
        await login(username, password);
    };

    return (
        <AuthLayout
            title="Sign in to your account"
            buttonLabel="Log in"
            handleSubmit={handleSubmit}
        >
            <p className="mt-6 text-left text-sm text-slate-10">
                Not a member?
                <Link
                    className="text-blue-10 ml-1 hover:underline focus:underline focus:outline-none"
                    to="/signup"
                >
                    Sign up now
                </Link>
            </p>
        </AuthLayout>
    );
};

export default LoginPage;
