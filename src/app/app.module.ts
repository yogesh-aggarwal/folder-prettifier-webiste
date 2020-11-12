import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./routes/home/home.component";
import { FeedbackComponent } from "./routes/feedback/feedback.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { EulaComponent } from "./routes/eula/eula.component";
import { DownloadComponent } from "./routes/download/download.component";
import { GuideComponent } from "./routes/guide/guide.component";
import { environment } from "src/environments/environment.prod";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { NoticeComponent } from './components/notice/notice.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedbackComponent,
    NavbarComponent,
    EulaComponent,
    DownloadComponent,
    GuideComponent,
    NoticeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
