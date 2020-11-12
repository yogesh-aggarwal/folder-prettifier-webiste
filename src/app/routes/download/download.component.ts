import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { EulaService } from "../../services/eula/eula.service";

@Component({
  selector: "app-download",
  templateUrl: "./download.component.html",
  styleUrls: ["./download.component.scss"],
})
export class DownloadComponent implements OnInit {
  constructor(private eulaService: EulaService, private router: Router) {}

  ngOnInit(): void {
    if (this.eulaService.isAgreed.value) return;
    this.eulaService.isDownloadRequest.next(true);
    this.router.navigate(["eula"]);
  }
}
