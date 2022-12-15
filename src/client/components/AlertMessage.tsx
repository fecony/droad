import { WarningOctagon } from "phosphor-react";

// NOTE: remove or change for informative messages about system downtime and so on
export const AlertMessage = () => (
    <div className="w-full text-white bg-yellow-3">
        <div className="container flex items-center justify-between px-6 py-4 mx-auto">
            <div className="flex">
                <WarningOctagon
                    size={24}
                    className="text-yellow-8"
                    weight="fill"
                />

                <p className="mx-3 text-yellow-8 font-semibold">
                    🐝 WIP. Our best bee is working as hard as it can
                </p>
            </div>
        </div>
    </div>
);
