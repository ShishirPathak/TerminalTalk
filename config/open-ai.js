import OpenAI from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const openai = new OpenAI({
  apiKey: process.env['OPEN_AI_SECRET_KEY'], // This is the default and can be omitted
});

export default openai;