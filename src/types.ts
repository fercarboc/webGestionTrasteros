export interface UnitSize {
  id: string;
  dimensions: string; // e.g., "2x1 m"
  area: number; // m2
  price: number; // Monthly price
  description: string;
  recommendedFor: string[];
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
}

export interface UseCase {
  title: string;
  description: string;
  iconName: string;
}

export interface UserBookingData {
  unitId: string | null;
  startDate: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  paymentMethod: 'card' | 'transfer';
}

export enum BookingStep {
  SELECT_UNIT = 0,
  SELECT_DATES = 1,
  PERSONAL_INFO = 2,
  PAYMENT = 3,
  CONFIRMATION = 4,
}
export interface TrasStorageUnit {
  id: string;
  unitNumber: string;
  size: string;
  price: number;
  status: string;
}
