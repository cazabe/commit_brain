import { Controller, Get } from '@nestjs/common';
import { CommitBrainService } from './commit-brain.service';


@Controller('commit-brain')
export class CommitBrainController {
    constructor(private readonly commitsService: CommitBrainService) { }
    @Get()
    getWeatherForecasts() {
        return this.commitsService.getCommits();
    }
}
