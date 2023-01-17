import { ComponentFixture, TestBed } from "@angular/core/testing";
import { differenceInDays, lastDayOfYear, startOfYear } from "date-fns";
import { YearProgressPage } from "./year-progress.page";

describe("YearProgressPage", () => {
  let component: YearProgressPage;
  let fixture: ComponentFixture<YearProgressPage>;

  const initializeComponents = async () => {
    await TestBed.configureTestingModule({
      declarations: [YearProgressPage],
    }).compileComponents();

    fixture = TestBed.createComponent(YearProgressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  };

  it("should create", async () => {
    await initializeComponents();
    expect(component).toBeTruthy();
  });

  it("daysInYear ensure correct days in year", async () => {
    await initializeComponents();

    const date = new Date();
    const year = date.getFullYear();

    const expectedDays = year % 4 == 0 && year % 100 !== 0 ? 366 : 365;

    expect(component.daysInYear).toBe(expectedDays);
  });
  it("daysInYear ensure correct days to date", async () => {
    await initializeComponents();

    const date = new Date();
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const expectedDays = differenceInDays(date, startOfYear);
    expect(component.daysToDate).toBe(expectedDays);
  });

  it("should show 100% on the last day of the year", async () => {
    const lastDay = lastDayOfYear(new Date());
    const isLeapYear =
      lastDay.getFullYear() % 4 == 0 && lastDay.getFullYear() % 100 !== 0;

    jest.useFakeTimers({ now: lastDay.getTime() });

    await initializeComponents();

    const expectedDays = isLeapYear ? 366 : 365;
    expect(component.daysToDate).toBe(expectedDays - 1);
    jest.useRealTimers();
  });
  
  it("should show 0% on the first day of the year", async () => {
    const firstDay = startOfYear(new Date());
    jest.useFakeTimers({ now: firstDay.getTime() });

    await initializeComponents();

    const expectedDays = 0;
    expect(component.daysToDate).toBe(expectedDays);
    jest.useRealTimers();
  });
});
