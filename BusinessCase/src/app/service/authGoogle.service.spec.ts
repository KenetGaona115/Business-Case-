/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthGoogleService } from './authGoogle.service';

describe('Service: AuthGoogle', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGoogleService]
    });
  });

  it('should ...', inject([AuthGoogleService], (service: AuthGoogleService) => {
    expect(service).toBeTruthy();
  }));
});
