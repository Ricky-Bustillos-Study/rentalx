import { ConnectionOptions, createConnection } from 'typeorm';

const config: ConnectionOptions = {
  type: 'postgres',
  port: 5432,
  host: 'database_rentx',
  username: 'admin',
  password: 'ignite',
  database: 'db_rentx',
};

createConnection(config);
