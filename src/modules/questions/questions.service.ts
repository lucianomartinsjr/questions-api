import { Injectable } from '@nestjs/common';

@Injectable()
export class QuestionsService {
  private questions = [];
  private questionIdCounter = 1;

  getAllQuestions() {
    return this.questions;
  }

  getQuestionById(id: number) {
    return this.questions.find((q) => q.id === id);
  }

  createQuestion(pergunta: string) {
    const newQuestion = { id: this.questionIdCounter++, pergunta };
    this.questions.push(newQuestion);
    return newQuestion;
  }

  deleteQuestion(id: number) {
    const index = this.questions.findIndex((q) => q.id === id);
    if (index !== -1) {
      this.questions.splice(index, 1);
      return { message: 'Question deleted successfully' };
    }
  }
}
