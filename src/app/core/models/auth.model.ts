import { User } from 'src/app/modules/dashboard/models/user';

export interface LoginRequest {
  email: string;
  senha: string;
}

export interface LoginResponse {
  user: User;
  jwt: string;
  message: string;
}

export interface JwtPayload extends Pick<User, 'role' | 'name' | 'email' | 'id'> {}
