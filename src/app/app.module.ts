import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./routes/home/home.component";
import { FeedbackComponent } from "./routes/feedback/feedback.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrivacyComponent } from './routes/privacy/privacy.component';
import { DownloadComponent } from './routes/download/download.component';
import { GuideComponent } from './routes/guide/guide.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, FeedbackComponent, NavbarComponent, PrivacyComponent, DownloadComponent, GuideComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
