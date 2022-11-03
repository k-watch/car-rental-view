import { SEGMENT, FUEL_TYPE } from 'types/enum';
import { CarInterface } from 'types/api';
import Img from 'components/common/Img';

const CarItem = (car: CarInterface) => {
  return (
    <div>
      <div>{car.attribute.brand}</div>
      <div>{car.attribute.name}</div>
      <div>{SEGMENT[car.attribute.segment]}</div>
      <div>{FUEL_TYPE[car.attribute.fuelType]}</div>
      <div>{car.amount}</div>
      <div>{car.createdAt}</div>
      <Img
        width={130}
        height="100%"
        src={car.attribute.imageUrl}
        alt={car.attribute.name}
        lazy
      />
    </div>
  );
};

export default CarItem;