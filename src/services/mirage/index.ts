import { createServer, Factory, Model } from 'miragejs';
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

      this.get('/users');
      this.post('/users');

      //reset to avoid conflict with nextjs
      this.namespace = '';
      this.passthrough();
    },
  });

  return server;
};
