import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BackdropBackLayerContentComponent } from './backdrop-back-layer-content.component';

describe('BackdropBackLayerContentComponent', () => {
  let component: BackdropBackLayerContentComponent;
  let fixture: ComponentFixture<BackdropBackLayerContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackdropBackLayerContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackdropBackLayerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
