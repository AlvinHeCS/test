import type { FastifyInstance } from 'fastify';

import { randomUUID } from 'node:crypto';

const MAX_UUIDS = 10;

interface UuidQuery {
  count?: number;
}

/**
 * GET /uuid returns one UUID by default, or up to 10 when `count` is set.
 */
export default async function uuidRoutes(app: FastifyInstance) {
  app.get<{ Querystring: UuidQuery }>(
    '/uuid',
    {
      schema: {
        querystring: {
          type: 'object',
          properties: {
            count: { type: 'integer', minimum: 1, maximum: MAX_UUIDS, default: 1 },
          },
        },
      },
    },
    async req => {
      const count = req.query.count ?? 1;
      if (count === 1) return { uuid: randomUUID() };

      return { uuids: Array.from({ length: count }, () => randomUUID()) };
    },
  );
}
