export interface User {
  id: number;
  name: string;
}

export interface ApiConfig {
  api: { path: string; resources: { [key: string]: string } };
}
