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

  content: z
    .string({ message: 'Post content is required' })
    .min(50, { message: 'Post content minimum length is 50 characters' }),

  image: z
    .string({ message: 'Post image is required' })
    .startsWith('https://', { message: 'Image link should be encrypted'}),

  status: z
    .enum(["Published", "Pending"],{ message: 'Status should be Published or Pending' }),
    
  category: z
    .enum(["lorem", "other"],{ message: 'Category should be lorem or other' }),

  publishedAt: z
    .string({ message: 'Category should be lorem or other' }),
    

  updatedAt: z.string({ message: 'Post update date is required' }),
});
