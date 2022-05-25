import { resolve } from 'path';
import { cwd } from 'process';
import { config } from 'dotenv';

const exampleFilePath = resolve(cwd(), '.env.example');
config({ path: exampleFilePath });
