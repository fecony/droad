import { z } from "zod";

export const UserSchema = z.object({
    id: z.number(),
    username: z.string(),
    password: z.string(),
    email: z.string().optional(),
    avatar: z.string().optional(),
    createdAt: z.date(),
    updatedAt: z.date(),

    // roadmaps                  Roadmap[]
    // upvotedFeatures           RoadmapFeature[]  @relation("UpvotedFeatures")
    // externalAuthAssociations  SocialAuth[]
    // comments                  Comment[]
});

export const UserCreateSchema = z.object({
    username: z.string().optional(),
    email: z.string().optional(),
    password: z.string().optional(),
});

export const UserUpdateSchema = UserCreateSchema.extend({
    avatar: z.string().optional(),
});

export const UsersSchema = z.array(UserSchema);

export type User = z.TypeOf<typeof UserSchema>;
export type UserUpdate = z.TypeOf<typeof UserUpdateSchema>;
export type UserCreate = z.TypeOf<typeof UserCreateSchema>;
