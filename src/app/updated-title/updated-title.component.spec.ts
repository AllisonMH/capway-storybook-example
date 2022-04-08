import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatedTitleComponent } from './updated-title.component';

describe('UpdatedTitleComponent', () => {
  let component: UpdatedTitleComponent;
  let fixture: ComponentFixture<UpdatedTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatedTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatedTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
