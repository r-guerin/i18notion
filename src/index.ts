#!/usr/bin/env node
import { config } from 'dotenv';
import { run } from './main';
import { logError } from './log';

try {
  config();
  run();
} catch (error) {
  logError(`An error occured: ${error}`);
  process.exit(-1);
}
