import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DownloadComponent } from "./routes/download/download.component";
import { FeedbackComponent } from "./routes/feedback/feedback.component";
import { GuideComponent } from "./routes/guide/guide.component";
import { HomeComponent } from "./routes/home/home.component";
import { PrivacyComponent } from "./routes/privacy/privacy.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "feedback", component: FeedbackComponent },
  { path: "download", component: DownloadComponent },
  { path: "guide", component: GuideComponent },
  { path: "privacy-policy", component: PrivacyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
