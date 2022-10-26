import { Module } from '@nestjs/common';
import { CommitBrainController } from './commit-brain.controller';
import { CommitBrainService } from './commit-brain.service';
import { HttpModule } from '@nestjs/axios';


@Module({
  imports: [HttpModule],
  controllers: [CommitBrainController],
  providers: [CommitBrainService],
})
export class CommitBrainModule { }
