import { surpriseMePrompts } from '../constants';
import FileSaver from 'file-saver';

// to generate the random prompts I used logic of generating 
//a random number between 0 and the length of the array of prompts.

export function getRandomPrompt(prompt){
    const randomIndex = Math.floor(Math.random()*surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];

    //checking if the same prompt does not repeat.
    if(randomPrompt === prompt){
        return getRandomPrompt(prompt);
    }

    return randomPrompt;
}

export async function downloadImage(_id, photo){
    FileSaver.saveAs(photo, `download-${_id}.jpg`);
}