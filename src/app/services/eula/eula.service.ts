import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class EulaService {
  isDownloadRequest: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isAgreed: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() {}
}
