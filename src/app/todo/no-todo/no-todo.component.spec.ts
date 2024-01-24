import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoTodoComponent } from './no-todo.component';

describe('NoTodoComponent', () => {
  let component: NoTodoComponent;
  let fixture: ComponentFixture<NoTodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoTodoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NoTodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
