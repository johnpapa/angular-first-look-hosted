import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleLinkComponent } from './example-link.component';

describe('ExampleLinkComponent', () => {
  let component: ExampleLinkComponent;
  let fixture: ComponentFixture<ExampleLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
