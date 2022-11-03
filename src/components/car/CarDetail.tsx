import Img from 'components/common/Img';
import {
  CAR_ACTION_TYPE,
  useCarDispatch,
  useCarState,
} from 'modules/context/CarContext';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import { SEGMENT, FUEL_TYPE } from 'types/enum';

const CarDetail = () => {
  const { carDetail: car } = useCarState();
  const dispatch = useCarDispatch();
  const { carId } = useParams();

  useEffect(() => {
    if (carId) {
      dispatch({ type: CAR_ACTION_TYPE.GET_CAR_DETAIL, carId });
    }
  }, [carId]);

  return (
    <div>
      {car && (
        <div>
          <Img
            width={130}
            height="100%"
            src={car.attribute.imageUrl}
            alt={car.attribute.name}
            lazy
          />
          <div>{car.attribute.brand}</div>
          <div>{car.attribute.name}</div>
          <div>{car.amount}</div>
          <div>차량정보</div>
          <div>{SEGMENT[car.attribute.segment]}</div>
          <div>{FUEL_TYPE[car.attribute.fuelType]}</div>
          <div>{car.startDate}</div>
          <div>보험</div>
          <div>
            <span>{car.insurance[0].name}</span>
            <span>{car.insurance[0].description}</span>
          </div>
          <div>
            <span>{car.insurance[1].name}</span>
            <span>{car.insurance[1].description}</span>
          </div>
          <div>추가상품</div>
          <div>
            <span>{car.additionalProducts[0].name}</span>
            <span>{car.additionalProducts[0].amount}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetail;
