import { array, z } from 'zod';

export const sampleScheme = z.object({
  booleanProxy: z.object({
    trueDisplay: z.boolean().default(true)
  }),
  dateProxy: z.object({
    format: z.object({
      iso: z.date().default(new Date('2024-10-01')),
      date: z.date().default(new Date('2024-10-01')),
      datetime: z.date().default(new Date('2024-10-01')),
      time: z.date().default(new Date('2024-10-01')),
      dateUtc: z.date().default(new Date('2024-10-01')),
      datetimeUtc: z.date().default(new Date('2024-10-01')),
      timeUtc: z.date().default(new Date('2024-10-01')),
      dateLocal: z.date().default(new Date('2024-10-01')),
      datetimeLocal: z.date().default(new Date('2024-10-01')),
      timeLocal: z.date().default(new Date('2024-10-01'))
    }),
    empty: z.object({
      default: z.date().default(new Date('2024-10-01')),
      undefined: z.date().default(new Date('2024-10-01')),
      null: z.date().default(new Date('2024-10-01'))
    })
  }),
  intProxy: z.object({
    initiallyEmptyIfZeroTrue: z.number().int().min(1),
    initiallyEmptyIfZeroFalse: z.number().int().min(1).default(12.3435),
    empty: z.object({
      zero: z.number().int(),
      undefined: z.number().int().min(1).optional(),
      null: z.number().int().min(1).nullable()
    })
  }),
  numberProxy: z.object({
    initiallyEmptyIfZeroTrue: z.number().int().min(1),
    initiallyEmptyIfZeroFalse: z.number().int().min(1),
    delimiter: z.number().min(0.1).default(12345.6789),
    empty: z.object({
      zero: z.number().int(),
      undefined: z.number().int().min(1).optional(),
      null: z.number().int().min(1).nullable()
    })
  }),
  stringProxy: z.object({
    empty: z.object({
      default: z.string(),
      undefined: z.string().optional(),
      null: z.string().nullable()
    })
  }),
  arrayProxy: z
    .array(z.enum(['1', '2']))
    .min(1)
    .max(2),
  fileProxy: z.instanceof(File).refine((file) => file.size < 10240, 'greater than 10KB'),
  fileFieldProxy: z.instanceof(File).refine((file) => file.size < 10240, 'greater than 10KB'),
  filesProxy: z.array(z.instanceof(File).refine((file) => file.size < 10240, 'greater than 10KB')).min(2),
  filesFieldProxy: z.array(z.instanceof(File).refine((file) => file.size < 10240, 'greater than 10KB')).min(2),
  formFieldProxy: z.object({
    string: z.string().min(1),
    array: z.array(z.string().max(2).default('abc'))
  }),
  fieldProxy: z.string().min(1)
});

export type SampleScheme = z.infer<typeof sampleScheme>;
