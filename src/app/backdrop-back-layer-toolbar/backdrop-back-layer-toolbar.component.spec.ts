import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackdropBackLayerToolbarComponent } from './backdrop-back-layer-toolbar.component';

describe('BackdropBackLayerToolbarComponent', () => {
  let component: BackdropBackLayerToolbarComponent;
  let fixture: ComponentFixture<BackdropBackLayerToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackdropBackLayerToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackdropBackLayerToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
