import { NgModule } from "@angular/core";
import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { YearProgressPage } from "./pages";

const routes: Routes = [
  {
    path: "",
    component: YearProgressPage,
  },
];
const config: ExtraOptions = {
  initialNavigation: "enabledNonBlocking",
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
