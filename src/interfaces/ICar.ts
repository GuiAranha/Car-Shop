import { z } from 'zod';
import { vehicleZodSchema } from './IVehicle';

export const carZodSchema = z.intersection(vehicleZodSchema, z.object({
  doorsQty: z.number().int().max(4).min(2),
  seatsQty: z.number().int().max(4).min(2),
}));

export type ICar = z.infer<typeof carZodSchema>;