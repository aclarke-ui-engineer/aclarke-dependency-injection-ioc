import { HTTP } from "./http";

import type { ApiConfig, User } from "../types";
export class Users {
  http: HTTP;
  apiConfig: ApiConfig;
  static $inject = ["http", "apiConfig"];

  constructor(http: HTTP, apiConfig: ApiConfig) {
    this.http = http;
    this.apiConfig = apiConfig;
  }

  async getUsers() {
    return this.http.get(
      this.apiConfig.api.resources.users
    ) as unknown as User[];
  }
}
