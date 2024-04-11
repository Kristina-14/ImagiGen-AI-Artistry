import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();

const configuration = {
    // apiKey: 'OPENAI_API_KEY = "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"'
    apiKey: process.env.OPENAI_API_KEY
};

const openai = new OpenAI(configuration);

router.route('/').get((req, res) => {
    res.send('Great the API is working!!');
});

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;

        const aiResponse = await openai.image.create({
            prompt,
            n: 1,
            size: '1024x1024',
            responseType: 'b64_json',
        });

        const image = aiResponse.data[0];
         res.status(200).json({ photo: image });
    } catch (error) {
        console.log(error);
        res.status(500).send(error?.response?.data?.error?.message);
    }
});

export default router;
