import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampusVistualComponent } from './campus-vistual.component';

describe('CampusVistualComponent', () => {
  let component: CampusVistualComponent;
  let fixture: ComponentFixture<CampusVistualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampusVistualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampusVistualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
