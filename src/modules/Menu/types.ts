import { BreadData, BunsData, CakesData, PiesData } from "store/reducers/types";

type InnerProps = {
    breadData: BreadData,
    cakesData: CakesData,
    piesData: PiesData,
    bunsData: BunsData,
}

// type OuterProps = {
//     activePage:() => void;
//     setActivePage: () => void;
//     data: InnerProps[],
//     dictionaryData: Record<DictionaryItem, PortfolioInfoItem>;
// }

type OuterProps<DictionaryItems> = {
    dictionaryData: Record<DictionaryItem, InnerProps>;
    activePage: DictionaryItems;
    setActivePage: (activeBlock: DictionaryItems) => void;
  };

export type { OuterProps }