import { Component, OnInit } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-feedback",
  templateUrl: "./feedback.component.html",
  styleUrls: ["./feedback.component.scss"],
})
export class FeedbackComponent implements OnInit {
  error: {
    name: boolean;
    email: boolean;
    feedback: boolean;
  } = {
    name: true,
    email: false,
    feedback: true,
  };
  values: {
    name: string;
    email: string;
    feedback: string;
  } = { name: "", email: "", feedback: "" };
  isDisabled: boolean = false;

  constructor(private firestore: AngularFirestore) {}

  ngOnInit(): void {}

  updateValue(value: string, key: string) {
    this.values[key] = value;
    if (key === "email") return;
    this.error[key] = !value;
  }

  validateEmail(email: string) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  async submit() {
    this.isDisabled = true;
    if (this.values.email && !this.validateEmail(this.values.email)) {
      console.log("Invalid Email!");
      this.isDisabled = false;
      return;
    }

    if (this.error.name || this.error.feedback) {
      this.isDisabled = false;
      return;
    }

    await this.firestore
      .collection("feedback")
      .doc(Date.now().toString())
      .set({
        ...this.values,
        dateSubmitted: new Date(),
      });
    this.isDisabled = false;
  }
}
