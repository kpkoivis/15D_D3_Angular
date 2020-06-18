import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D15ViewComponent } from './d15-view.component';

describe('D15ViewComponent', () => {
  let component: D15ViewComponent;
  let fixture: ComponentFixture<D15ViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D15ViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D15ViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
