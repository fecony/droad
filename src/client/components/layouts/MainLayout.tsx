import { ReactNode } from "react";
import { Link } from "react-router-dom";
import logout from "@wasp/auth/logout";
import { Door, FingerprintSimple, FilePng } from "phosphor-react";
import useAuth from "@wasp/auth/useAuth.js";
import { clsx } from "clsx";
import Layout from "./Layout";

function MainLayout({ children }: { children: ReactNode }) {
    const { data: user } = useAuth();

    return (
        <>
            <main className="h-screen justify-center">{children}</main>

            {user && (
                <button
                    className={clsx(
                        "fixed top-16 right-2 border border-slate-6 border-2 group hover:border-slate-8 transition-colors duration-300 rounded-md overflow-hidden",
                        !user.avatar && "p-1.5"
                    )}
                >
                    {user.avatar ? (
                        <img
                            className="w-9 rounded"
                            src={user.avatar}
                            alt={`${user.username} avatar`}
                        />
                    ) : (
                        <FilePng
                            size={24}
                            className="text-slate-7 group-hover:text-slate-9 transition-colors duration-300"
                        />
                    )}
                </button>
            )}

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
