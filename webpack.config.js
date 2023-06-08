import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  entry: './wallet.js',
  output: {
    filename: 'bundle.js',
    path: `${__dirname}/dist`,
  },
};