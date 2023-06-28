import { BreadData, BunsData, CakesData, PiesData } from "store/reducers/types";

type InnerProps = {
  breadData: BreadData,
  cakesData: CakesData,
  piesData: PiesData,
  bunsData: BunsData,
}

// type StateProps<DictionaryItems> = {
//   dictionaryData: Record<DictionaryItem, InnerProps>;
//   activePage: DictionaryItems;
//   setActivePage: (activePage: DictionaryItems) => void;
//   data: InnerProps;
// };

type StateProps = {
  dictionaryData: Record<DictionaryItem, InnerProps>;
  activePage: InnerProps;
  setActivePage: (activePage: InnerProps) => void;
  data: InnerProps;
};


export type { StateProps, InnerProps }