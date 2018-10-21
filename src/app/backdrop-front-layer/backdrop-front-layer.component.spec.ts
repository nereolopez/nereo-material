import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackdropFrontLayerComponent } from './backdrop-front-layer.component';

describe('BackdropFrontLayerComponent', () => {
  let component: BackdropFrontLayerComponent;
  let fixture: ComponentFixture<BackdropFrontLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackdropFrontLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackdropFrontLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
