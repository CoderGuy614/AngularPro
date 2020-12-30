export interface User {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}