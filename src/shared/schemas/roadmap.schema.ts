import { z } from "zod";
import { UserSchema } from "./user.schema.js";
import { FeaturesSchema } from "./feature.schema.js";

export const RoadmapViewSchema = z.object({
    id: z.string(),
    title: z.string().min(1),
    description: z.string().nullish(),
    createdAt: z.date(),
    updatedAt: z.date(),

    // TODO: add user and feature schema
    authorId: z.number(),
    author: UserSchema.partial().optional(),
    features: FeaturesSchema.optional(),

  // settings     Json // TODO: customize roadmap settings
  // customStatuses String[] // TODO: custom statuses for features
  // collaborators  User[] // TODO: allow to invite other users to work on roadmap (will allow them to change settings, etc)
});

export const RoadmapCreateSchema = z.object({
    title: z.string().min(1),
    description: z.string(),
    authorId: z.number(),
});

export const RoadmapUpdateSchema = RoadmapCreateSchema.partial().omit({ authorId: true });;

export type Roadmap = z.TypeOf<typeof RoadmapViewSchema>;
export type RoadmapUpdate = z.TypeOf<typeof RoadmapUpdateSchema>;
export type RoadmapCreate = z.TypeOf<typeof RoadmapCreateSchema>;
