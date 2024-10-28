import { z } from 'zod';

export const linkSchema = z.object({
    link: z.string().min(1).max(200),
    linkURL: z.string().min(1).max(200)
});

export type LinkSchema = typeof linkSchema;