import { ReactNode } from "react";
import { Link } from "react-router-dom";
import logout from "@wasp/auth/logout";
import { Door, FingerprintSimple } from "phosphor-react";
import useAuth from "@wasp/auth/useAuth.js";
import Layout from "./Layout";

function MainLayout({ children }: { children: ReactNode }) {
    const { data: user } = useAuth();

    return (
        <>
            <main className="h-screen justify-center">{children}</main>

            {user ? <LogoutButton /> : <LoginButtonLink />}

            {/* TODO: footer and more */}
        </>
    );
}

const LogoutButton = () => {
    return (
        <button
            className="fixed border border-slate-6 border-2 group hover:border-slate-8 transition-colors duration-300 rounded-md bottom-2 p-1.5 right-2"
            onClick={logout}
        >
            <Door
                size={24}
                className="text-slate-7 group-hover:text-slate-9 transition-colors duration-300"
            />
        </button>
    );
};

const LoginButtonLink = () => {
    return (
        <Link
            className="fixed border border-slate-6 border-2 group hover:border-slate-8 transition-colors duration-300 rounded-md bottom-2 p-1.5 right-2"
            to="/login"
        >
            <FingerprintSimple
                size={24}
                className="text-slate-7 group-hover:text-slate-9 transition-colors duration-300"
            />
        </Link>
    );
};

export default Layout(MainLayout);
