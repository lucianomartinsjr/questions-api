import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { QuestionsService } from './questions.service';

@Controller('perguntas')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) { }

  @Get()
  getAllQuestions() {
    return this.questionsService.getAllQuestions();
  }

  @Get(':id')
  getQuestionById(@Param('id') id: number) {
    return this.questionsService.getQuestionById(id);
  }

  @Post()
  createQuestion(@Body('pergunta') pergunta: string) {
    return this.questionsService.createQuestion(pergunta);
  }

  @Delete(':id')
  deleteQuestion(@Param('id') id: number) {
    return this.questionsService.deleteQuestion(id);
  }
}
