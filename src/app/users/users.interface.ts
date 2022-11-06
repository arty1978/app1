export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthday?: string;
  isBlocked: boolean;
  isActive?: boolean;
}
