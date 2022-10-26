import { Test, TestingModule } from '@nestjs/testing';
import { CommitBrainController } from './commit-brain.controller';

describe('CommitBrainController', () => {
  let controller: CommitBrainController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommitBrainController],
    }).compile();

    controller = module.get<CommitBrainController>(CommitBrainController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
