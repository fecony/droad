import { useQuery } from "@wasp/queries";
import getRoadmaps from "@wasp/queries/getRoadmaps";
import { Heart } from "phosphor-react";

import MainLayout from "../components/layouts/MainLayout";
// import { RoadmapModel } from '@wasp/shared/types'; // NOTE: dreams...

const MainPage = ({ user }: { user: any }) => {
    const { data: roadmaps, isFetching, error } = useQuery(getRoadmaps);

    return (
        <MainLayout>
            <h1 className="text-3xl font-bold underline">
                Hello from wasp, {user.username}!
            </h1>
            <Heart size={32} color="hotpink" weight="fill" />
            <button className="bg-tomato-9 p-4 py-2 rounded-full text-gray-12">
                Button
            </button>

            {roadmaps && <RoadmapList roadmaps={roadmaps} />}
            {isFetching && "Fetching..."}
            {error && "Error: " + error}

            {/* TODO: hardcoded roadmap */}
        </MainLayout>
    );
};

const RoadmapList = ({ roadmaps }) => {
    if (!roadmaps?.length) {
        return <h1>No roadmaps</h1>;
    }

    return (
        <>
            {roadmaps.map((roadmap, idx) => (
                <Roadmap roadmap={roadmap} key={idx} />
            ))}
        </>
    );
};

const Roadmap = ({ roadmap }) => {
    return <div>{roadmap.title}</div>;
};

export default MainPage;
