import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';
import axios from 'axios';
import fs from 'fs';

dotenv.config();

const router = express.Router();

const configuration = {
    apiKey: process.env.OPENAI_API_KEY
};

const openai = new OpenAI(process.env.OPENAI_API_KEY);

router.route('/').get((req, res) => {
    res.send('Great the API is working!!');
});

router.route('/').post(async (req, res) => {
    try {
        const prompt = req.body.prompt;
        console.log(prompt)

        const aiResponse = await openai.images.generate({
            prompt,
            n: 1,
            size: '1024x1024',
        });

        console.log(aiResponse.data[0].url)
        const response = await axios.get(aiResponse.data[0].url, { responseType: 'arraybuffer' });
        const imageData = Buffer.from(response.data, 'binary').toString('base64');

         res.status(200).json({ photo: imageData });
    } catch (error) {
        console.log(error);
        res.status(500).send(error?.response?.data?.error?.message);
    }
});

export default router;
