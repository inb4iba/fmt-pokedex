import { Injectable } from "@angular/core";

let users: Array<{ username: string; password: string }>;

@Injectable({
  providedIn: "root",
})
export class ConnectionService {
  constructor() {
    users = JSON.parse(localStorage.getItem("pokedex_users") || "[]");
  }

  register(user: { username: string; password: string }) {
    users.push(user);
    localStorage.setItem("pokedex_users", JSON.stringify(users));
  }

  connect(connectionUser: { username: string; password: string }) {
    const connected = users.some(
      (user) =>
        user.username === connectionUser.username &&
        user.password === connectionUser.password
    );

    if (connected)
      localStorage.setItem("pokedex_connected", connectionUser.username);

    return connected;
  }

  disconnect() {
    localStorage.setItem("pokedex_connected", "");
  }

  checkIfUsernameExists(username: string): boolean {
    return users.some((user) => user.username === username);
  }

  isConnected(): boolean {
    return !!localStorage.getItem("pokedex_connected");
  }
}
