/**
 * This file contains the root router of your tRPC-backend
 */
import { createContextInner } from '../context';
import { createCallerFactory, publicProcedure, router } from '../trpc';
import { experimental_lazy } from '@trpc/server';

export const appRouter = router({
  healthcheck: publicProcedure.query(() => 'yay!'),

  post: experimental_lazy(() => import('./post')),
  slow: experimental_lazy(() => import('./slow')),
});

export const createCaller = createCallerFactory(appRouter);

export type AppRouter = typeof appRouter;

const ctx = await createContextInner({});
export const caller = createCaller(ctx);
