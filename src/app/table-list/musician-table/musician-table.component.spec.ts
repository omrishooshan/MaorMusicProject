import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicianTableComponent } from './musician-table.component';

describe('MusicianTableComponent', () => {
  let component: MusicianTableComponent;
  let fixture: ComponentFixture<MusicianTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicianTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicianTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
