import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPhotoComponent } from './show-photo.component';

describe('ShowPhotoComponent', () => {
  let component: ShowPhotoComponent;
  let fixture: ComponentFixture<ShowPhotoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowPhotoComponent]
    });
    fixture = TestBed.createComponent(ShowPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
