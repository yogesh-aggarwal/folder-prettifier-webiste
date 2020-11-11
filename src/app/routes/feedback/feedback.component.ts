import { Component, OnInit } from "@angular/core";

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
    name: false,
    email: false,
    feedback: false,
  };
  values: {
    name: string;
    email: string;
    feedback: string;
  } = { name: "", email: "", feedback: "" };

  constructor() {}

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

  submit() {
    if (this.values.email && !this.validateEmail(this.values.email)) {
      console.log("Invalid Email!");
      return;
    }
    if (this.error.name && this.error.feedback) return;
    console.log(this.values);
  }
}
