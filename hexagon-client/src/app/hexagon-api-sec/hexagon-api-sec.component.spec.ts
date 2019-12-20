import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HexagonApiSecComponent } from './hexagon-api-sec.component';

describe('HexagonApiSecComponent', () => {
  let component: HexagonApiSecComponent;
  let fixture: ComponentFixture<HexagonApiSecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HexagonApiSecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HexagonApiSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
