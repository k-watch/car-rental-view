import React, { useReducer, useContext, createContext, Dispatch } from 'react';
import { SegmentType } from '@src/types/enum';
import { CarInterface } from '@src/types/api';

export const CAR_ACTION_TYPE = {
  SET_SEGMENT: 'SET_SEGMENT',
  SET_CAR_LIST: 'SET_CAR_LIST',
  SET_CAR: 'SET_CAR',
} as const;

interface CarState {
  segment: SegmentType;
  carList: CarInterface[];
  car: CarInterface | undefined;
}

type Action =
  | {
      type: typeof CAR_ACTION_TYPE.SET_SEGMENT;
      segment: SegmentType;
    }
  | {
      type: typeof CAR_ACTION_TYPE.SET_CAR_LIST;
      carList: CarInterface[];
    }
  | {
      type: typeof CAR_ACTION_TYPE.SET_CAR;
      car: CarInterface;
    };

type CarDispatch = Dispatch<Action>;

const reducer = (state: CarState, action: Action): CarState => {
  switch (action.type) {
    case CAR_ACTION_TYPE.SET_SEGMENT:
      return {
        ...state,
        segment: action.segment,
      };
    case CAR_ACTION_TYPE.SET_CAR_LIST: {
      return {
        ...state,
        carList: [...action.carList],
      };
    }
    case CAR_ACTION_TYPE.SET_CAR:
      return {
        ...state,
        car: { ...action.car },
      };
    default:
      throw new Error('Unhandled action');
  }
};

const CarStateContext = createContext<CarState | null>(null);
const CarDispatchContext = createContext<CarDispatch | null>(null);

export function CarProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    segment: 'ALL',
    carList: [],
    car: undefined,
  });

  return (
    <CarStateContext.Provider value={state}>
      <CarDispatchContext.Provider value={dispatch}>
        {children}
      </CarDispatchContext.Provider>
    </CarStateContext.Provider>
  );
}

export function useCarState() {
  const state = useContext(CarStateContext);
  if (!state) throw new Error('CarProvider 가 없습니다.');
  return state;
}

export function useCarDispatch() {
  const dispatch = useContext(CarDispatchContext);
  if (!dispatch) throw new Error('CarProvider 가 없습니다.');
  return dispatch;
}
