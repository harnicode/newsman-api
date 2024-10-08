import { z } from 'zod';

export const postSchema = z.object({
  id: z
    .string({ message: 'Post ID is required' })
    .startsWith('post_')
    .transform((value) => value.split('_')[1])
    .pipe(
      z
        .string({ message: 'Post ID is invalid. UUID part is missing' })
        .uuid({ message: 'Post ID is invalid. Incorrect UUID string' }),
    ),

  title: z
    .string({ message: 'Post title is required' })
    .min(5, { message: 'Post title must have a minimum of 5 characters' })
    .max(255, {
      message: 'Post title should have a maximum of 255 characters',
    }),

  slug: z
    .string({ message: 'Post slug is required' })
    .min(5, { message: 'Post slug must have a minimum of 5 characters' })
    .max(255, {
      message: 'Post slug should have a maximum of 255 characters',
    }),

  image: z.string({ message: 'Post image is required' }).url({
    message: 'The Post image must be a valid URL',
  }),

  status: z.string({ message: 'Post status is required' }),

  category: z.string({ message: 'Post status is required' }),

  publishedAt: z.string({ message: 'Post publishedAt is required' }),

  content: z
    .string({ message: 'Post content is required' })
    .min(50, { message: 'Post content minimum length is 50 characters' }),

  updatedAt: z.string({ message: 'Post update date is required' }),
});
