import * as dotenv from 'dotenv';

dotenv.config();

export const port = process.env.PORT;
export const db_uri = process.env.DB_URI;