import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { EulaComponent } from "./eula.component";

describe("PrivacyComponent", () => {
  let component: EulaComponent;
  let fixture: ComponentFixture<EulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EulaComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
