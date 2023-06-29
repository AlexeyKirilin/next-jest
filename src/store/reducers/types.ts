export type HandlePending<S> = {
  state: S;
  name: ContentStateBlocks;
};
  
export type HandleFulfilled<S, P> = {
  state: S;
  payload: P;
  name: ContentStateBlocks;
};

export type HandleRejected<S, E> = {
  state: S;
  errorData: E;
  name: ContentStateBlocks;
};

export type BreadData = {
  id: number,
  title: string,
  imageUrl: string,
  price: number
  total: number,
  category: string,
  descr: string;
}

export type CakesData = {
  id: number,
  imageUrl: string,
  title: string,
  price: number
  total: number,
  category: string,
  descr: string
}

export type PiesData = {
  id: number,
  imageUrl: string,
  title: string,
  price: number
  total: number,
  category: string,
  descr: string
}

export type BunsData = {
  id: number,
  imageUrl: string,
  title: string,
  price: number
  total: number,
  category: string,
  descr: string
}

export type TotalData = {
  title: string,
  price: number,
  id: number
}

export enum ContentStateBlocks {
  BREAD = 'bread',
  CAKES = 'cakes',
  BUNS = 'buns',
  PIES = 'pies',
  TOTAL = 'total'
}

export enum CurrentPage  {
  BREAD = 'bread',
  CAKES = 'cakes',
  BUNS = 'buns',
  PIES = 'pies'
}

export type ErrorAction = {
  error: {
    name: string;
    message: string;
  };
};

export type StoreError = {
  name: string;
  message: string;
};

export type StoreBlock<R> = {
  data: R[],
  isLoading: boolean;
  error: StoreError | null;
}
export type BreadState = StoreBlock<BreadData>
export type CakesState = StoreBlock<CakesData>
export type PiesState = StoreBlock<PiesData>
export type BunsState = StoreBlock<BunsData>
export type TotalState = StoreBlock<TotalData>

export type ContentState = {
  [ContentStateBlocks.BREAD]: BreadState;
  [ContentStateBlocks.CAKES]: CakesState;
  [ContentStateBlocks.PIES]: PiesState;
  [ContentStateBlocks.BUNS]: BunsState;
  [ContentStateBlocks.TOTAL]: TotalState;
};
