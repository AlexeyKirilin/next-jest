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
  imageUrl: string,
  title: string,
  price: number
  total: number,
  category: string,
  descr: string
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

type PunsData = {
    id: number,
    imageUrl: string,
    title: string,
    price: number
    total: number,
    category: string,
    descr: string
}

type ContentState = {
    [ContentStateBlocks.BREAD]: BreadState;
    [ContentStateBlocks.CAKES]: CakesState;
    [ContentStateBlocks.PUNS]: PiesState;
    [ContentStateBlocks.PIES]: PunsState;
};
  
enum ContentStateBlocks {
    BREAD = 'bread',
    CAKES = 'cakes',
    PUNS = 'puns',
    PIES = 'pies'
}

type StoreError = {
    name: string;
    message: string;
};

type StoreState = {
    isLoading: boolean;
    error: StoreError | null;
};

type BreadState = {
    data: BreadData[] | null;
} & StoreState;

type CakesState = {
    data: CakesData[] | null;
} & StoreState;

type PiesState = {
    data: PiesData[] | null;
} & StoreState;

type PunsState = {
    data: PunsData[] | null;
} & StoreState;

export type {
  HandlePending, 
  HandleFulfilled, 
  HandleRejected, 
  BreadData, 
  CakesData, 
  PiesData, 
  PunsData, 
  BreadState,
  CakesState,
  PiesState,
  PunsState, 
  ContentState
}

export { ContentStateBlocks }