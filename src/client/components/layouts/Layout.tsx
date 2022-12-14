import { Toaster } from "react-hot-toast";
import "../../main.css";

export default function Layout<P extends object>(
    LayoutComponent: React.ComponentType<P>
): React.FC<P> {
    return function (props) {
        return (
            <>
                <Toaster
                    toastOptions={{
                        position: "top-right",
                        style: {
                            borderRadius: "4px",
                        },
                    }}
                />

                <div className="bg-slate-1 dark:bg-slate-2">
                    <LayoutComponent {...(props as P)} />
                </div>
            </>
        );
    };
}
