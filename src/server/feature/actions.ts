import HttpError from "@wasp/core/HttpError.js";
import { Prisma } from "@prisma/client";

export const voteForFeature = async (args: any, context: any) => {
    if (!context.user) {
        throw new HttpError(401);
    }

    const featureDelegate = context.entities.RoadmapFeature as Prisma.RoadmapFeatureDelegate<{}>;
    const votesOperationKey = args.votedByUser ? "decrement" : "increment";
    const upvotedByOperationKey = args.votedByUser ? "disconnect" : "connect";

    return featureDelegate.update({
        where: {
            id: args.featureId,
        },
        data: {
            votes: {
                [votesOperationKey]: 1,
            },
            upvotedBy: {
                [upvotedByOperationKey]: {
                    id: context.user.id,
                },
            },
        },
    });
};
