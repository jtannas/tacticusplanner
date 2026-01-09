// eslint-disable-next-line import-x/no-named-as-default
import z from 'zod';

export const LegendaryEventTrackSchema = z.object({
    name: z.string(),
    killPoints: z.number(),
    battlesPoints: z.array(z.number()),
    enemies: z.object({
        label: z.string(),
        link: z.string(),
    }),
});

export const ProgressionSchema = z.object({
    unlock: z.number(),
    fourStars: z.number(),
    fiveStars: z.number(),
    blueStar: z.number(),
    mythic: z.number().optional(), // Automatic mythic ascension
    twoBlueStars: z.number().optional(), // Mythic two blue stars
});

export const PointsMilestoneSchema = z.object({
    milestone: z.number(),
    cumulativePoints: z.number(),
    engramPayout: z.number(),
});

export const ChestMilestoneSchema = z.object({
    chestLevel: z.number(),
    engramCost: z.number(),
});

export const LreTrackIdSchema = z.enum(['alpha', 'beta', 'gamma']);

export const LegendaryEventStaticSchema = z.object({
    id: z.number(),
    unitSnowprintId: z.string(), // The snowprint ID for the unit.
    name: z.string(),
    wikiLink: z.string(),
    eventStage: z.number(),
    finished: z.boolean(),
    nextEventDate: z.string().optional(),
    nextEventDateUtc: z.string().optional(),

    regularMissions: z.array(z.string()),
    premiumMissions: z.array(z.string()),

    alpha: LegendaryEventTrackSchema,
    beta: LegendaryEventTrackSchema,
    gamma: LegendaryEventTrackSchema,

    pointsMilestones: z.array(PointsMilestoneSchema),
    chestsMilestones: z.array(ChestMilestoneSchema),

    shardsPerChest: z.number(),
    battlesCount: z.number(),
    constraintsCount: z.number(),
    progression: ProgressionSchema,
});

export type ILegendaryEventStatic = z.infer<typeof LegendaryEventStaticSchema>;
export type ILegendaryEventTrackStatic = z.infer<typeof LegendaryEventTrackSchema>;
export type ILEProgression = z.infer<typeof ProgressionSchema>;
export type IPointsMilestone = z.infer<typeof PointsMilestoneSchema>;
export type IChestMilestone = z.infer<typeof ChestMilestoneSchema>;
export type LreTrackId = z.infer<typeof LreTrackIdSchema>; //
