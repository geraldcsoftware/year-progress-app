import { ComponentFixture, TestBed } from "@angular/core/testing";
import { differenceInDays } from "date-fns";

import { YearProgressPage } from "./year-progress.page";

describe("YearProgressPage", () => {
  let component: YearProgressPage;
  let fixture: ComponentFixture<YearProgressPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YearProgressPage],
    }).compileComponents();

    fixture = TestBed.createComponent(YearProgressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("daysInYear ensure correct days in year", () => {
    const date = new Date();
    const year = date.getFullYear();

    const expectedDays = year % 4 == 0 && year % 100 !== 0 ? 366 : 365;

    expect(component.daysInYear).toBe(expectedDays);
  });
  it("daysInYear ensure correct days to date", () => {
    const date = new Date();
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const expectedDays = differenceInDays(date, startOfYear);
    expect(component.daysToDate).toBe(expectedDays);
  });
});
