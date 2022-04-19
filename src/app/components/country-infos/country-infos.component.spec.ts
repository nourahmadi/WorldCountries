import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryInfosComponent } from './country-infos.component';

describe('CountryInfosComponent', () => {
  let component: CountryInfosComponent;
  let fixture: ComponentFixture<CountryInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
