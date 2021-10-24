import { TestBed } from '@angular/core/testing';

import { ChatDataTransferService } from './chat-data-transfer.service';

describe('ChatDataTransferService', () => {
  let service: ChatDataTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChatDataTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
