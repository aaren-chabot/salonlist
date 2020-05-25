import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedBusinessesComponent } from './recommended-businesses.component';

describe('RecommendedBusinessesComponent', () => {
  let component: RecommendedBusinessesComponent;
  let fixture: ComponentFixture<RecommendedBusinessesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedBusinessesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedBusinessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
