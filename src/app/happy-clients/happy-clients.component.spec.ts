import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyClientsComponent } from './happy-clients.component';

describe('HappyClientsComponent', () => {
  let component: HappyClientsComponent;
  let fixture: ComponentFixture<HappyClientsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HappyClientsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HappyClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
