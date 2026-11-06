import 'server-only';
import JWT, { JwtPayload } from 'jsonwebtoken';

export const getJWTPayload = <T extends JwtPayload>(token: string) => {
  return JWT.decode(token, { json: true }) as T;
};
