type HandlePending<S> = {
  state: S;
  name: ContentStateBlocks;
};
  
type HandleFulfilled<S, P> = {
  state: S;
  payload: P;
 name: ContentStateBlocks;
};

type HandleRejected<S, E> = {
  state: S;
  errorData: E;
  name: ContentStateBlocks;
};

type BreadData = {
  id: number,
  title: string,
  imageUrl: string,
  price: number
  total: number,
  category: string,
  descr: string;
}

type CakesData = {
  id: number,
  imageUrl: string,
  title: string,
  price: number
  total: number,
  category: string,
  descr: string
}

type PiesData = {
  id: number,
  imageUrl: string,
  title: string,
  price: number
  total: number,
  category: string,
  descr: string
}

type BunsData = {
  id: number,
  imageUrl: string,
  title: string,
  price: number
  total: number,
  category: string,
  descr: string
}

type TotalData = {
  title: string,
  price: number,
  id: number
}

enum ContentStateBlocks {
  BREAD = 'bread',
  CAKES = 'cakes',
  BUNS = 'buns',
  PIES = 'pies',
  TOTAL = 'total'
}

enum CurrentPage  {
  BREAD = 'bread',
  CAKES = 'cakes',
  BUNS = 'buns',
  PIES = 'pies'
}

type ContentState = {
  [ContentStateBlocks.BREAD]: BreadState;
  [ContentStateBlocks.CAKES]: CakesState;
  [ContentStateBlocks.PIES]: PiesState;
  [ContentStateBlocks.BUNS]: Bunstate;
  [ContentStateBlocks.TOTAL]: TotalState;
};
  

type StoreError = {
  name: string;
  message: string;
};

type StoreBlock<R> = {
  data: R[],
  isLoading: boolean;
  error: StoreError | null;
}
type BreadState = StoreBlock<BreadData>

type CakesState = {
    data: CakesData[];
} & StoreState;

type PiesState = {
    data: PiesData[];
} & StoreState;

type BunsState = {
    data: BunsData[];
} & StoreState;

type TotalState = {
  data: TotalData[];
} & StoreState;

export type {
  HandlePending, 
  HandleFulfilled, 
  HandleRejected, 
  BreadData,
  CakesData, 
  PiesData, 
  BunsData, 
  BreadState,
  CakesState,
  PiesState,
  BunsState, 
  ContentState,
  TotalState,
  TotalData
}

export { ContentStateBlocks, CurrentPage }