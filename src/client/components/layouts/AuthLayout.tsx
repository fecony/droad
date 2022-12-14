import { ReactNode, useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-hot-toast";
import Layout from "./Layout";

function AuthLayout({
    children,
    title,
    buttonLabel,
    handleSubmit,
}: {
    children: ReactNode;
    title: string;
    buttonLabel: string;
    handleSubmit: (fields: {
        username: string;
        password: string;
    }) => Promise<void>;
}) {
    const history = useHistory();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleFormSubmit = async (event: any) => {
        event.preventDefault();

        try {
            await handleSubmit({ username, password });

            history.push("/", { from: "auth page" });
        } catch (error: any) {
            console.error(error);
            toast.error(`Looks like ${error.data.message}`, {
                icon: "🐛",
            });
        }
    };

    return (
        <div className="flex h-screen justify-center">
            {/* TODO: add real product image */}
            <div
                className="hidden bg-cover xl:block lg:w-1/2"
                style={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1625834384234-fd4eb7fe121f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)",
                }}
            >
                <div className="items-top flex-col h-full bg-blackA-9 dark:bg-blackA-5 p-20">
                    <h2 className="text-4xl font-bold text-gray-4">Roadmap</h2>
                    {/* TODO: add some real text */}
                    <p className="mt-3 max-w-xl text-gray-4">
                        Lorem ipsum some motivational text later
                    </p>
                </div>
            </div>

            <div className="mx-auto flex w-full max-w-md items-center px-6 lg:w-1/2">
                <div className="flex-1">
                    <h2 className="text-left text-3xl font-bold text-slate-12">
                        {title}
                    </h2>

                    {/* <!-- TODO: github login --> */}

                    <div className="mt-8">
                        <form onSubmit={handleFormSubmit}>
                            <div>
                                <label
                                    htmlFor="username"
                                    className="mb-2 block text-sm text-slate-12"
                                >
                                    Username
                                </label>

                                <input
                                    value={username}
                                    onChange={(event) =>
                                        setUsername(event.target.value)
                                    }
                                    type="username"
                                    name="text"
                                    id="username"
                                    placeholder="Your username"
                                    className="mt-2 block w-full rounded border border-gray-4 bg-gray-1 px-4 py-2 text-slate-11 placeholder-gray-400 focus:border-blue-8 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                                />
                            </div>

                            <div className="mt-6">
                                {/* <div className='mb-2 flex justify-between'> */}
                                <label
                                    htmlFor="password"
                                    className="mb-2 flex text-sm text-slate-12"
                                >
                                    Password
                                </label>
                                {/* </div> */}

                                <input
                                    value={password}
                                    onChange={(event) =>
                                        setPassword(event.target.value)
                                    }
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Your Password"
                                    className="mt-2 block w-full rounded border border-gray-4 bg-gray-1 px-4 py-2 text-slate-11 placeholder-gray-400 focus:border-blue-8 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-40"
                                />

                                <div className="flex justify-end">
                                    <a
                                        href="#"
                                        className="block mt-2 text-right text-sm text-slate-10 hover:text-blue-10 hover:underline focus:text-blue-10"
                                    >
                                        Forgot password?
                                    </a>
                                </div>
                            </div>

                            <div className="mt-6">
                                <button className="w-full transform rounded bg-blue-10 px-4 py-2 tracking-wide text-gray-1 transition-colors duration-300 hover:bg-blue-11 focus:bg-blue-11 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    {buttonLabel}
                                </button>
                            </div>
                        </form>

                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Layout(AuthLayout);
