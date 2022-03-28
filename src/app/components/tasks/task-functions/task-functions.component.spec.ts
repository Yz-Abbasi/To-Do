import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFunctionsComponent } from './task-functions.component';

describe('TaskFunctionsComponent', () => {
  let component: TaskFunctionsComponent;
  let fixture: ComponentFixture<TaskFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskFunctionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
