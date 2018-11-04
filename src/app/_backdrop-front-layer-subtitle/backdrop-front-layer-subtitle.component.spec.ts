import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackdropFrontLayerSubtitleComponent } from './backdrop-front-layer-subtitle.component';

describe('BackdropFrontLayerSubtitleComponent', () => {
  let component: BackdropFrontLayerSubtitleComponent;
  let fixture: ComponentFixture<BackdropFrontLayerSubtitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackdropFrontLayerSubtitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackdropFrontLayerSubtitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
