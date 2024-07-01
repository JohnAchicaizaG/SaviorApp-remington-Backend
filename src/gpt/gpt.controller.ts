import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { GptService } from './gpt.service';
import { OrthographyDto } from './dtos';

@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) { }

  @Post('orthography-check')
  orthographyCheck(
    @Body() orthographyDto: OrthographyDto
  ) {
    return this.gptService.orthograpyCheck(orthographyDto)
  }


  @Post('savior')
  @HttpCode(200) // Establece el código de estado HTTP 200
  saviorIa(
    @Body() boy: any,
  ) {
    // console.log(boy)
    return this.gptService.orthograpyCheck(boy)
    // return this.gptService.orthograpyCheck(nuevo)
  }


}
