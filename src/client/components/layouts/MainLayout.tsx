import { ReactNode } from "react";
import logout from "@wasp/auth/logout";
import { Heart } from "phosphor-react";
import useAuth from "@wasp/auth/useAuth.js";
import Layout from "./Layout";

function MainLayout({ children }: { children: ReactNode }) {
    const { data: user } = useAuth();

    return (
        <>
            {/* TODO: navbar, auth, etc */}
            <main>{children}</main>

            {user && (
                <button className="absolute bottom-1 right-1" onClick={logout}>
                    <Heart size={24} color="gray-11" />
                </button>
            )}

            {/* TODO: footer and more */}
        </>
    );
}

export default Layout(MainLayout);
