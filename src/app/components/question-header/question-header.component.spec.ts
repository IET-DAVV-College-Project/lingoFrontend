import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionHeaderComponent } from './question-header.component';

describe('QuestionHeaderComponent', () => {
  let component: QuestionHeaderComponent;
  let fixture: ComponentFixture<QuestionHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuestionHeaderComponent]
    });
    fixture = TestBed.createComponent(QuestionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
