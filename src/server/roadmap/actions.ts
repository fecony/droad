import HttpError from '@wasp/core/HttpError.js'
import { Prisma, Roadmap } from '@prisma/client';

export const createRoadmap = async (args: any, context: any) => {
    if (!context.user) {
        throw new HttpError(401);
    }
    
    const roadmapDelegate = context.entities.Roadmap as Prisma.RoadmapDelegate<{}>;

    // TODO: validate with zod?

    return roadmapDelegate.create({
        data: {
            title: args.title,
            description: args.description,
            author: {
                connect: { 
                    id: context.user.id
                }
            }
        }
    });
};

export const updateRoadmap = async (args: any, context: any) => {
    if (!context.user) {
        throw new HttpError(401);
    }

    const roadmapDelegate = context.entities.Roadmap as Prisma.RoadmapDelegate<{}>;
    
    return roadmapDelegate.updateMany({
        where: {
            id: args.roadmapId,
            author: { 
                id: context.user.id
            }
        },
        data: {
            // title: args.title,
            // description: args.description,
        },
    });
};
