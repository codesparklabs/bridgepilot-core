import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot("mongodb+srv://user_bridgepilot:fXULrPz8jdZ3syTo@cluster0.1zhjtbo.mongodb.net/bridgepilot")
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
