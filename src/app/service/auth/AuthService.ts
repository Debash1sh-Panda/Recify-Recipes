import { endpoints } from "@/app/endpoints";
import { httpService } from "../httpService";

class AuthClass {
  private auth;

  constructor() {
    this.auth = httpService;
  }

  public register(data = {}) {
    this.auth._post(endpoints.auth.register, data);
  }
}

export const AuthService = new AuthClass();
