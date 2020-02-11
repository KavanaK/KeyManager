import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShContextMenuComponent } from './sh-context-menu.component';

describe('ShContextMenuComponent', () => {
  let component: ShContextMenuComponent;
  let fixture: ComponentFixture<ShContextMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShContextMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
