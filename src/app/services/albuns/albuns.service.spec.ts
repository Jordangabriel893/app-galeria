import { TestBed, inject } from '@angular/core/testing';

import { AlbunsService } from './albuns.service';

describe('AlbunsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlbunsService]
    });
  });

  it('should be created', inject([AlbunsService], (service: AlbunsService) => {
    expect(service).toBeTruthy();
  }));
});
