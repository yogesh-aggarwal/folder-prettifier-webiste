import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FeedbackComponent } from "./routes/feedback/feedback.component";
import { HomeComponent } from "./routes/home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "feedback", component: FeedbackComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
