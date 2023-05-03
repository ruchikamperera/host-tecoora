import { TestBed } from '@angular/core/testing';

import { StudentPointFormService } from './student-point-form.service';

describe('StudentPointFormService', () => {
  let service: StudentPointFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentPointFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
