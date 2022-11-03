import { SegmentType, FuelType } from './enum';

export interface CarInterface {
  id: number;
  startDate: string;
  createdAt: string;
  attribute: {
    brand: string;
    name: string;
    segment: SegmentType;
    fuelType: FuelType;
    imageUrl: string;
  };
  amount: number;
  insurance: [
    {
      name: string;
      description: string;
    },
    {
      name: string;
      description: string;
    }
  ];
}
