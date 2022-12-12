import { Prisma } from '@prisma/client';
import HttpError from '@wasp/core/HttpError.js'
import { RoadmapViewSchema, Roadmap } from '../../shared/schemas/roadmap.schema.js';
import { User as Author } from '../../shared/schemas/user.schema.js';
import { exclude } from '../../shared/prisma.js';

export const getRoadmaps = async (args: any, context: any): Promise<Partial<Roadmap>[]> => {
    if (!context.user) {
        throw new HttpError(401)
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
                    username: true
                },
            },
        },
    });

    return RoadmapViewSchema.partial().array().parse(roadmaps);
}

// TODO: check if user is author or can collaborate on edit page
export const getRoadmap = async (args: any, context: any): Promise<Partial<Roadmap>> => {
    if (!context.user) {
        throw new HttpError(401)
    }

    const delegate: Prisma.RoadmapDelegate<{}> = context.entities.Roadmap as Prisma.RoadmapDelegate<{}>;
    const roadmapModel: Roadmap  = await delegate.findUnique({
        where: { 
            id: args.roadmapId
        },
        include: {
            author: true,
            features: true
        }
    });

    const roadmap: Partial<Roadmap> = {
        ...roadmapModel,
        author: exclude<Partial<Author>, keyof Author>(roadmapModel.author!, ['password']),
    };

    return RoadmapViewSchema.partial().parse(roadmap);    
}
