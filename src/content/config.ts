import { defineCollection, z } from 'astro:content';

const staffCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    title: z.string(), // e.g., "Senior Pastor", "Deaconess"
    image: z.string().startsWith('/uploads/staff/'),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    bio: z.string().optional(), // Short bio in frontmatter
    order: z.number().default(0),
    draft: z.boolean().default(false),
  }),
});

const eventsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(), // Event start date
    endDate: z.date().optional(), // Event end date
    time: z.string().optional(), // e.g., "09:00 AM - 11:00 AM"
    location: z.string(),
    image: z.string().startsWith('/uploads/events/'),
    summary: z.string(),
    tags: z.array(z.string()).optional(),
    registrationLink: z.string().url().optional(),
    registrationRequired: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

const sermonsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(), // Auto-generated if not provided
    date: z.date(),
    speaker: z.string(),
    series: z.string().optional(),
    scripture: z.string().optional(),
    audioUrl: z.string().url().optional(),
    videoUrl: z.string().url().optional(),
    image: z.string().startsWith('/uploads/sermons/').optional(), // Thumbnail
    summary: z.string().optional(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

const mountaineeringCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    image: z.string().startsWith('/uploads/mountaineering/').optional(),
    summary: z.string().optional(), 
    dates: z.string().optional(),
    duration: z.string().optional(), 
    season: z.string().optional(),
    difficulty: z.string().optional(),
    videoUrl: z.string().url().optional(),
    pax: z.string().optional(),
    order: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});

const trekkingCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    image: z.string().startsWith('/uploads/trekking/').optional(),
    summary: z.string().optional(), 
    dates: z.string().optional(),
    duration: z.string().optional(), 
    season: z.string().optional(),
    difficulty: z.string().optional(),
    videoUrl: z.string().url().optional(),
    pax: z.string().optional(),
    order: z.number().optional(),
    draft: z.boolean().default(false),
  }),
});

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    pubDate: z.date(),
    description: z.string(), // Short description for previews
    author: z.string().default("Church Staff"),
    image: z.object({
      url: z.string().startsWith('/uploads/blog/'),
      alt: z.string()
    }).optional(),
    tags: z.array(z.string()).default(["general"]),
    draft: z.boolean().default(false),
  }),
});

const siteInfoCollection = defineCollection({
  type: 'content', // Could be 'data' if only frontmatter is needed
  schema: z.object({
    title: z.string(), // For identifying the content block
  }),
});

export const collections = {
  staff: staffCollection,
  events: eventsCollection,
  sermons: sermonsCollection,
  mountaineering: mountaineeringCollection,
  trekking: trekkingCollection,
  blog: blogCollection,
  siteInfo: siteInfoCollection,
};