import { z } from "zod";

export const FeatureSchema = z.object({
    id: z.string(),
    title: z.string().min(1),
    description: z.string().min(1),
    vote: z.number().positive(),

    createdAt: z.date(),
    updatedAt: z.date(),
    // comments     Comment[] // TODO: option to comment on features! if allowed
    // status     String | Status // TODO: relation with status
    // roadmapId  String
    // roadmap    Roadmap  @relation(fields: [roadmapId], references: [id], onDelete: Cascade)
    // upvotedBy  User[]   @relation("UpvotedFeatures")
});

export const FeatureCreateSchema = z.object({
    title: z.string().min(1),
    description: z.string(),
    author: z.object({}),
});

export const FeatureUpdateSchema = FeatureCreateSchema.extend({});

export const FeaturesSchema = z.array(FeatureSchema.partial());

export type Feautre = z.TypeOf<typeof FeatureSchema>;
export type FeautreUpdate = z.TypeOf<typeof FeatureUpdateSchema>;
export type FeautreCreate = z.TypeOf<typeof FeatureCreateSchema>;
