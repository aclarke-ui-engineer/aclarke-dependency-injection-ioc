import IoCContainer from "ioc-lite";

import { Logger } from "../services/logger";
import { HTTP } from "../services/http";
import { Users } from "../services/users";
import { ApiConfig } from "src/types";

export type ServicesType = {
  logger: typeof Logger;
  http: typeof HTTP;
  users: typeof Users;
  apiConfig: ApiConfig;
};

export const createIoCContainer = () => {
  const ioc = new IoCContainer<ServicesType>();
  ioc.registerClass("logger", Logger);
  ioc.registerClass("http", HTTP);
  ioc.registerClass("users", Users);
  return ioc;
};

const ioc = createIoCContainer();
export default ioc;
