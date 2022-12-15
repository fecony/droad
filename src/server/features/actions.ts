import { ZodError } from "zod";
import HttpError from '@wasp/core/HttpError.js'
import { Prisma, Roadmap } from '@prisma/client';
import { RoadmapCreateSchema, RoadmapUpdateSchema } from '../../shared/schemas/roadmap.schema.js';

export const voteForFeature = async (args: any, context: any) => {
    if (!context.user) {
        throw new HttpError(401);
    }

    try {
        const featureDelegate = context.entities.Feature as Prisma.FeatureDelegate<{}>;

        return featureDelegate.update({
            where: {
                id: args.featureId,
            },
            data: {
                // TODO: and so on...
            },
        });
    } catch (error) {
        if (error instanceof ZodError) {
            throw new HttpError(400, "Something went wrong while creating roadmap", error.issues);
        }

        throw new HttpError(400, "Something went wrong while creating roadmap :(");
    }
};
