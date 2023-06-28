import { InnerProps } from "modules/Menu/types";

enum CategoryName {
    bread = 'BREAD',
    cakes = 'CAKES',
    pies = 'PIES',
    buns = 'BUNS'
}

type OuterProps<DictionaryItem> = {
    dictionaryData: Record<DictionaryItem, InnerProps>;
    activePage: DictionaryItem;
    setActivePage: (activePage: DictionaryItem) => void;
  };

export { CategoryName }

export type { OuterProps };
