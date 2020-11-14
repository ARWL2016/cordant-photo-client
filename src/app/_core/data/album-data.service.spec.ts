/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AlbumDataService } from './album-data.service';

describe('Service: AlbumData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlbumDataService]
    });
  });

  it('should ...', inject([AlbumDataService], (service: AlbumDataService) => {
    expect(service).toBeTruthy();
  }));
});
