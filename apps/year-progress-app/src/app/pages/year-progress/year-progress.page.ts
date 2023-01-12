import { Component, OnInit } from "@angular/core";
import { endOfYear, startOfYear, differenceInCalendarDays } from "date-fns";

@Component({
  selector: "year-progress-year-progress",
  templateUrl: "./year-progress.page.html",
  styles: [],
})
export class YearProgressPage implements OnInit {
  date: Date = new Date();
  year = this.date.getFullYear();

  daysInYear = 0;
  daysToDate = 0;

  ngOnInit(): void {
    this.calculateProgress();
  }

  calculateProgress(): void {
    const yearStart = startOfYear(this.date);
    const yearEnd = endOfYear(this.date);

    this.daysInYear = differenceInCalendarDays(yearEnd, yearStart) + 1;
    this.daysToDate = differenceInCalendarDays(this.date, yearStart);
  }
}
