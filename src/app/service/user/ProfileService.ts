import { endpoints } from "@/app/endpoints";
import { httpService } from "../httpService";

class ProfileService {
  private profile;

  constructor() {
    this.profile = httpService;
  }
  public getProfile(data = {}) {
    this.profile._get(endpoints.user.profile, data);
  }
}

export const Profile = new ProfileService();
