import { Users } from "./services/users";
import { Logger } from "./services/logger";

import type { User, ApiConfig } from "./types";
import ioc from "./ioc";

const renderUsers = async () => {
  const usersService = ioc.resolve("users") as Users;

  const users = await usersService.getUsers();

  const listNode = document.getElementById("users-list");

  users.forEach((user: User) => {
    const listItemNode = document.createElement("li");

    listItemNode.innerHTML = user.name;
    listNode.appendChild(listItemNode);
  });
};

const app = () => {
  const config: ApiConfig = (window as any).__CONFIG__;
  delete (window as any).__CONFIG__;
  ioc.register("apiConfig", config);
  renderUsers();
};

window.onload = (_event: Event) => {
  const logger = new Logger();

  logger.info("Page is loaded.");

  app();
};
