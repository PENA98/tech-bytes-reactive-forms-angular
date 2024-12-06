import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveExampleComponent } from './live-example.component';

describe('LiveExampleComponent', () => {
  let component: LiveExampleComponent;
  let fixture: ComponentFixture<LiveExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LiveExampleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LiveExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
