import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BemutatkozasComponent } from './bemutatkozas.component';

describe('BemutatkozasComponent', () => {
  let component: BemutatkozasComponent;
  let fixture: ComponentFixture<BemutatkozasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BemutatkozasComponent]
    });
    fixture = TestBed.createComponent(BemutatkozasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
