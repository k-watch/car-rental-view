import React, { useReducer, useContext, createContext, Dispatch } from 'react';
import { CarInterface } from 'types/api';
import { SegmentType } from 'types/enum';

export const CAR_ACTION_TYPE = {
  INIT_CAR_LIST: 'INIT_CAR_LIST',
  SET_CAR_LIST: 'SET_CAR_LIST',
  SET_SEGMENT: 'SET_SEGMENT',
} as const;

interface CarState {
  carList: CarInterface[];
  segment: SegmentType;
}

type Action =
  | { type: typeof CAR_ACTION_TYPE.INIT_CAR_LIST; carList: [] }
  | { type: typeof CAR_ACTION_TYPE.SET_CAR_LIST; carList: CarInterface[] }
  | { type: typeof CAR_ACTION_TYPE.SET_SEGMENT; segment: SegmentType };

type CarDispatch = Dispatch<Action>;

const reducer = (state: CarState, action: Action): CarState => {
  switch (action.type) {
    case CAR_ACTION_TYPE.INIT_CAR_LIST:
      return {
        ...state,
        carList: [...action.carList],
      };
    case CAR_ACTION_TYPE.SET_CAR_LIST:
      return {
        ...state,
        carList: [...state.carList, ...action.carList],
      };
    case CAR_ACTION_TYPE.SET_SEGMENT:
      return {
        ...state,
        segment: action.segment,
      };
    default:
      throw new Error('Unhandled action');
  }
};

const CarStateContext = createContext<CarState | null>(null);
const CarDispatchContext = createContext<CarDispatch | null>(null);

export function CarProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    carList: [],
    segment: 'C',
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
