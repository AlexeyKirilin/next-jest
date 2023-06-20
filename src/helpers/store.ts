import {
    HandleFulfilled,
    HandlePending,
    HandleRejected,
  } from 'store/reducers/ContentStore/types';
  
  const handlePendingStore = <S>({ state, name }: HandlePending<S>) => {
    state[name].pending = true;
  };
  
  const handleFulfilledStore = <S, P>({
    state,
    payload,
    name,
  }: HandleFulfilled<S, P>) => {
    state[name].data = payload;
    state[name].pending = false;
    state[name].error = null;
  };
  
  const handleRejectedStore = <S, E>({
    state,
    errorData,
    name,
  }: HandleRejected<S, E>) => {
    state[name].pending = false;
    state[name].error = errorData;
  };
  
  export { handlePendingStore, handleFulfilledStore, handleRejectedStore };