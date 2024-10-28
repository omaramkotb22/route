import {z } from 'zod';

export const profileViewSchema = z.object({
    userI: z.string().min(1).max(200),
    viewedBy: z.string().min(1).max(200),
    createdAt: z.string().min(1).max(200)
});

export type ProfileViewSchema = typeof profileViewSchema;