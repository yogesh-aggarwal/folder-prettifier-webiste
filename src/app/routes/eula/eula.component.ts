import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EulaService } from "src/app/services/eula/eula.service";

@Component({
  selector: "app-eula",
  templateUrl: "./eula.component.html",
  styleUrls: ["./eula.component.scss"],
})
export class EulaComponent implements OnInit {
  isDownloadRequest: boolean;

  constructor(private eulaService: EulaService, private router: Router) {}

  ngOnInit(): void {
    this.eulaService.isDownloadRequest.subscribe((isDownloadRequest) => {
      this.isDownloadRequest = isDownloadRequest;
    });
    console.log(this.isDownloadRequest);
  }

  agree() {
    this.eulaService.isDownloadRequest.next(false);
    this.eulaService.isAgreed.next(true);
    this.router.navigate(["download"]);
  }
}
