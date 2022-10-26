import { Test, TestingModule } from '@nestjs/testing';
import { CommitBrainService } from './commit-brain.service';

describe('CommitBrainService', () => {
  let service: CommitBrainService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CommitBrainService],
    }).compile();

    service = module.get<CommitBrainService>(CommitBrainService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
