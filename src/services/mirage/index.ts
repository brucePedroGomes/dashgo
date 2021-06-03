import { createServer, Factory, Model, Response } from 'miragejs';
import faker from 'faker';

type User = {
  name: string;
  email: string;
  created_at: string;
};

export const makeServer = () => {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        name(_index: number) {
          return faker.name.firstName();
        },
        email() {
          return faker.internet.email();
        },
        createdAt() {
          return faker.date.recent(10, new Date());
        },
      }),
    },

    seeds(server) {
      server.createList('user', 400);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 720;

      this.get('/users', function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;

        const users = schema.all('user');

        const totalPages = users.length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        return new Response(
          200,
          {
            'x-total-count': String(totalPages),
          },
          {
            users: this.serialize(users).users.slice(pageStart, pageEnd),
          }
        );
      });

      this.post('/users');

      //reset to avoid conflict with nextjs
      this.namespace = '';
      this.passthrough();
    },
  });

  return server;
};
