import { initTRPC } from '@trpc/server';
import { ZodError } from 'zod';

/**
 * Initialize tRPC
 */
const t = initTRPC.context<{}>().create({
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

/**
 * Create a router
 */
export const createTRPCRouter = t.router;

/**
 * Create a procedure
 */
export const publicProcedure = t.procedure;

/**
 * Create context
 */
export const createTRPCContext = async () => {
  return {};
};
