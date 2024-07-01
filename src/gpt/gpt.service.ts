import { Injectable } from '@nestjs/common';

import OpenAI from 'openai';

import { orthographyCheckUseCase } from './uses-cases';
import { OrthographyDto } from './dtos';

@Injectable()
export class GptService {

    private openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY
    });

    async orthograpyCheck(orthographyDto: any) {
        console.log("first", orthographyDto)
        return await orthographyCheckUseCase(this.openai, {
            prompt: orthographyDto
        })
    }
}
