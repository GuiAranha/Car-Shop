import { z } from 'zod';
import { vehicleZodSchema } from './IVehicle';

const carZodSchema = vehicleZodSchema.extend({
  doorsQty: z.number().max(4).min(2),
  seatsQty: z.number().max(4).min(2),
});

export type ICar = z.infer<typeof carZodSchema>;