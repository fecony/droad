import { ReactNode } from "react";
import logout from "@wasp/auth/logout";
import { Door } from "phosphor-react";
import useAuth from "@wasp/auth/useAuth.js";
import Layout from "./Layout";

function MainLayout({ children }: { children: ReactNode }) {
    const { data: user } = useAuth(
        {},
        {
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false,
                    refetchOnmount: false,
                    refetchOnReconnect: false,
                    retry: false,
                    staleTime: Infinity,
                },
            },
        }
    );

    return (
        <>
            <main className="h-screen justify-center">{children}</main>

            {user && (
                <button
                    className="absolute border border-slate-6 border-2 group hover:border-slate-8 transition-colors duration-300 rounded-md bottom-2 p-1.5 right-2"
                    onClick={logout}
                >
                    <Door
                        size={24}
                        className="text-slate-7 group-hover:text-slate-9 transition-colors duration-300"
                    />
                </button>
            )}

            {/* TODO: footer and more */}
        </>
    );
}

export default Layout(MainLayout);
