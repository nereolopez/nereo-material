import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackdropBackLayerComponent } from './backdrop-back-layer.component';

describe('BackdropBackLayerComponent', () => {
  let component: BackdropBackLayerComponent;
  let fixture: ComponentFixture<BackdropBackLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackdropBackLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackdropBackLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
