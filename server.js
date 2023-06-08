import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
app.use(cors());

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const distPath = path.resolve(__dirname, 'dist'); // Update 'dist' with your output directory

app.use(express.static(distPath));

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});