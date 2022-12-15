import { Prisma } from "@prisma/client";
import HttpError from "@wasp/core/HttpError.js";
import { RoadmapViewSchema, Roadmap } from "../../shared/schemas/roadmap.schema.js";
import { exclude } from "../../shared/prisma.js";

export const getRoadmaps = async (args: any, context: any): Promise<Partial<Roadmap>[]> => {
    if (!context.user) {
        throw new HttpError(401);
    }

    const delegate = context.entities.Roadmap as Prisma.RoadmapDelegate<{}>;
    const roadmaps = await delegate.findMany({
        select: {
            id: true,
            title: true,
            description: true,
            author: {
                select: {
                    id: true,
                    username: true,
                },
            },
        },
    });

    return RoadmapViewSchema.partial().array().parse(roadmaps);
};

// TODO: check if user is author or can collaborate on edit page
export const getRoadmap = async (args: any, context: any): Promise<Partial<Roadmap>> => {
    if (!context.user) {
        throw new HttpError(401);
    }

    const delegate: Prisma.RoadmapDelegate<{}> = context.entities.Roadmap as Prisma.RoadmapDelegate<{}>;
    const roadmapModel = await delegate.findFirst({
        where: {
            id: args.roadmapId,
        },
        include: {
            author: true,
            features: true,
        },
    });

    if (!roadmapModel) {
        throw new HttpError(404);
    }

    // NOTE: some messed up things because of messsy zod/prisma/typescript types
    const roadmap = {
        ...roadmapModel,
        author: exclude(roadmapModel.author, ["password"]),
    };

    return RoadmapViewSchema.partial().parse(roadmap);
};

// TODO: remove demo
export const getDemoRoadmap = async (args: any, context: any) => {
    const delegate: Prisma.RoadmapDelegate<{}> = context.entities.Roadmap as Prisma.RoadmapDelegate<{}>;

    const roadmap = await delegate.findFirst({
        take: -1,
        include: {
            features: true,
        },
    });

    if (!roadmap) {
        throw new HttpError(404, "No demo roadmap found, contact @fecony");
    }

    return roadmap;
};
