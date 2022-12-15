import { useQuery } from "@wasp/queries";
import getDemoRoadmap from "@wasp/queries/getDemoRoadmap";
import { Heart, Fire } from "phosphor-react";
import { useHistory } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import MainLayout from "../components/layouts/MainLayout";
// import { RoadmapModel } from '@wasp/shared/types'; // NOTE: dreams...
import { Roadmap as RoadmapType } from "../../shared/schemas/roadmap.schema.js";
// import { Feature as FeatureType } from "../../shared/schemas/feature.schema.js"; // WHy did I even

const MainPage = ({ user }: { user: any }) => {
    const { data: demoRoadmap, isFetching, error } = useQuery<any, any, { message: string }>(getDemoRoadmap);
    const history = useHistory<{ from: string }>();

    useEffect(() => {
        if (history.location.state?.from.includes("auth page")) {
            toast.success("It's nice to see you!", {
                icon: "🐝",
            });
            history.location.state.from = ""; // meh
        }
    }, [history.location.state]);

    useEffect(() => {
        if (error) {
            const message = error.message || "Something wrong...";

            toast.error(message, {
                icon: "🐛",
            });
        }
    }, [error]);

    return (
        <MainLayout>
            <div className="container max-w-4xl px-6 py-16 mx-auto">
                <h1 className="text-3xl font-semibold text-gray-800 lg:text-5xl">
                    Droad`s roadmap <span>🐝</span>
                </h1>

                <p className="mt-2 text-sm text-slate-10">
                    Example of how roadmap page would look like. <br />
                    What is a roadmap? Roadmap is a list of goals that specific team has for their product.
                </p>

                {demoRoadmap && (
                    <p className="mt-2 text-sm text-slate-10">
                        For example. Let's imagine that this is a{" "}
                        <span className="font-semibold text-slate-11">Droad`s</span> roadmap, You can vote for features
                        listed below!
                    </p>
                )}

                <div className="mt-8 space-y-8 lg:mt-12">
                    {/* Note: those probably have to live separately */}
                    {isFetching && "Fetching demo roadmap..."}

                    {error && (
                        <div className="flex w-full overflow-hidden bg-slate-1 border border-red-9 rounded">
                            <div className="flex items-center justify-center w-12 bg-red-9">
                                <Fire
                                    size={24}
                                    className="text-white"
                                />
                            </div>

                            <div className="px-4 py-2 -mx-3">
                                <div className="mx-3">
                                    <span className="font-semibold text-red-500 dark:text-red-400">Error</span>
                                    <p className="text-sm text-gray-600 dark:text-gray-200">{error.message}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {demoRoadmap && <Roadmap roadmap={demoRoadmap} />}
                </div>
            </div>
        </MainLayout>
    );
};

const Roadmap = ({ roadmap }: { roadmap: RoadmapType }) => {
    if (!roadmap) {
        return <h2>No demo roadmap found</h2>;
    }

    console.log(roadmap)

    return (
        <>
            {roadmap.features!.map((feature, idx) => (
                <Feature
                    feature={feature}
                    key={idx}
                />
            ))}
        </>
    );
};

// NOTE: Any goes brrr 🐝
const Feature = ({ feature }: any) => {
    return (
        <div className="p-4 bg-slate-3 rounded-lg">
            <div className="flex items-center space-x-2 w-full">
                <button className="flex w-20 shrink-0 items-center justify-center flex-col space-y-1">
                    <Heart
                        size={24}
                        className="text-red-9"
                        weight="fill" // NOTE: should be filled if upvotedBy includes current user ID
                    />
                    <span className="text-sm text-slate-10">{feature.votes} votes</span>
                </button>

                <h3 className="text-slate-12">{feature.title}</h3>
            </div>
        </div>
    );
};

export default MainPage;
