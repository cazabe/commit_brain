import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommitBrainModule } from './commit-brain/commit-brain.module';

@Module({
  imports: [CommitBrainModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
