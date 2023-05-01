import { Component } from "@angular/core";
import { ConnectionService } from "src/app/services/connection.service";

@Component({
  selector: "register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent {
  username: string;
  password: string;
  confirm: string;

  constructor(private connectionService: ConnectionService) {
    this.username = "";
    this.password = "";
    this.confirm = "";
  }

  register() {
    if (!this.passwordMatches())
      return window.alert("As senhas tem que ser a mesma!");

    if (this.connectionService.checkIfUsernameExists(this.username))
      return window.alert("Username já existe!");

    this.connectionService.register({
      username: this.username,
      password: this.password,
    });
  }

  passwordMatches(): boolean {
    return this.password === this.confirm;
  }
}
