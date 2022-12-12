import { ZodError } from "zod";
import HttpError from '@wasp/core/HttpError.js'
import { Prisma, Roadmap } from '@prisma/client';
import { RoadmapCreateSchema, RoadmapUpdateSchema } from '../../shared/schemas/roadmap.schema.js';

export const createRoadmap = async (args: any, context: any): Promise<Roadmap> => {
    if (!context.user) {
        throw new HttpError(401);
    }

     try {
        const roadmapDelegate = context.entities.Roadmap as Prisma.RoadmapDelegate<{}>;

        RoadmapCreateSchema.parse({
            title: args.title,
            description: args.description,
            authorId: args.authorId,
        });

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
    } catch (error) {
        if (error instanceof ZodError) {
            throw new HttpError(400, "Something went wrong while creating roadmap", error.issues);
        }

        throw new HttpError(400, "Something went wrong while creating roadmap :(");
    }
};

export const updateRoadmap = async (args: any, context: any): Promise<Roadmap> => {
    if (!context.user) {
        throw new HttpError(401);
    }

    try {
        const roadmapDelegate = context.entities.Roadmap as Prisma.RoadmapDelegate<{}>;

        RoadmapUpdateSchema.parse({
            title: args.title,
            description: args.description,
            authorId: Number(context.user.id),
        });

            
        return roadmapDelegate.update({
            where: {
                id: args.roadmapId,
            },
            data: {
                title: args.title,
                description: args.description,
            },
        });
    } catch (error) {
        if (error instanceof ZodError) {
            throw new HttpError(400, "Something went wrong while creating roadmap", error.issues);
        }

        throw new HttpError(400, "Something went wrong while creating roadmap :(");
    }
};
