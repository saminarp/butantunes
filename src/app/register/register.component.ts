import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { RegisterUser } from "src/app//RegisterUser";
import { AuthService } from "src/app//auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  constructor(private auth: AuthService) {}

  registerUser!: RegisterUser;
  warning: string = "";
  success: boolean = false;
  loading: boolean = false;

  ngOnInit(): void {
    this.registerUser = new RegisterUser();
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      this.loading = true;
      this.auth.register(this.registerUser).subscribe({
        next: (success) => {
          this.success = true;
          this.warning = "";
          this.loading = false;
        },
        error: (err) => {
          this.success = false;
          this.warning = err.error.message;
          this.loading = false;
        },
      });
    }
  }
}
