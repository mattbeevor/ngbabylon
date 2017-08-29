import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChessDiagram } from './chess-diagram.component';

describe('ChessDiagramComponent', () => {
  let component: ChessDiagram;
  let fixture: ComponentFixture<ChessDiagram>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChessDiagram ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChessDiagram);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
