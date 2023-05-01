import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ConnectionService } from "src/app/services/connection.service";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  username: string;
  password: string;

  constructor(
    private connectionService: ConnectionService,
    private router: Router
  ) {
    this.username = "";
    this.password = "";
  }

  login() {
    if (
      !this.connectionService.connect({
        username: this.username,
        password: this.password,
      })
    )
      return window.alert("Usuário ou senha incorreto!");

    this.router.navigate(["/"]);
  }
}
