import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class CommitBrainService {
    constructor(private httpService: HttpService) { }
    async getCommits(): Promise<any[]> {
        const url = 'https://api.github.com/repos/cazabe/commit_brain/commits';

        const { data } = await firstValueFrom(this.httpService.get(url));
        return data;
    }
}
