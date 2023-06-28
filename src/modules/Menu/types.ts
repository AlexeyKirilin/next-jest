import { BreadData, BunsData, CakesData, PiesData } from "store/reducers/types";

type InnerProps = {
  breadData: BreadData,
  cakesData: CakesData,
  piesData: PiesData,
  bunsData: BunsData,
}

type StateProps = {
  dictionaryData: Record<DictionaryItem, InnerProps>;
  activePage: InnerProps;
  setActivePage: (activePage: InnerProps) => void;
  data: InnerProps;
};

type OuterProps = {}

type ConnectorProps = {}
type ControllerProps = {}
type ViewProps = {}


export type { StateProps, InnerProps }