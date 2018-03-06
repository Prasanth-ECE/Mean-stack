import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BingSearchComponent } from './bing-search.component';

describe('BingSearchComponent', () => {
  let component: BingSearchComponent;
  let fixture: ComponentFixture<BingSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BingSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BingSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
