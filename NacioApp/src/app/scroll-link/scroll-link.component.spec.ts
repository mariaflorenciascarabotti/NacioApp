import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollLinkComponent } from './scroll-link.component';

describe('ScrollLinkComponent', () => {
  let component: ScrollLinkComponent;
  let fixture: ComponentFixture<ScrollLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
