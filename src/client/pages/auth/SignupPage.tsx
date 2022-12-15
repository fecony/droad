import { Link } from "react-router-dom";
import signup from "@wasp/auth/signup";
import login from "@wasp/auth/login";
import AuthLayout from "../../components/layouts/AuthLayout";

const SignupPage = () => {
    const handleSubmit = async (fields: {
        username: string;
        password: string;
    }): Promise<void> => {
        const { username, password } = fields;

        await signup(fields);
        await login(username, password);
    };

    return (
        <AuthLayout
            title="Create account"
            buttonLabel="Sign in"
            handleSubmit={handleSubmit}
        >
            <p className="mt-6 text-left text-sm text-slate-10">
                Already have an account?
                <Link
                    className="text-blue-10 ml-1 hover:underline focus:underline focus:outline-none"
                    to="/login"
                >
                    Go to login
                </Link>
            </p>
        </AuthLayout>
    );
};

export default SignupPage;
