import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionsModule } from './modules/questions/questions.module';
import { AnswersModule } from './modules/answers/answers.module';

@Module({
  imports: [QuestionsModule, AnswersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
