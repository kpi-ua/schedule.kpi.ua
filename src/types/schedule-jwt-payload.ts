import { JwtPayload } from 'jsonwebtoken';

export interface ScheduleJwtPayload extends JwtPayload {
  // TODO: Change
  id: string;
}
