import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarGeneralComponent } from './nav-bar-general.component';

describe('NavBarGeneralComponent', () => {
  let component: NavBarGeneralComponent;
  let fixture: ComponentFixture<NavBarGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
