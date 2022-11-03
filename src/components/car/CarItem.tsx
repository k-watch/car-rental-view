import { CarInterface } from 'types/api';
import { useCarState } from 'modules/context/CarContext';
import Img from 'components/common/Img';

const CarItem = (car: CarInterface) => {
  const { segment } = useCarState();

  return (
    <div>
      {segment === car.attribute.segment ? (
        <div>
          <div>{car.attribute.brand}</div>
          <div>{car.attribute.name}</div>
          <div>{car.attribute.segment}</div>
          <div>{car.attribute.fuelType}</div>
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
      ) : null}
    </div>
  );
};

export default CarItem;
