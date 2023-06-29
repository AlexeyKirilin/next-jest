import { BreadData, BunsData, CakesData, PiesData } from "store/reducers/types";

type StateProps = {
  breadData: BreadData,
  cakesData: CakesData,
  piesData: PiesData,
  bunsData: BunsData,
}

type InnerProps = {
  fetchAllBreadsProducts: () => void;
  fetchAllCakesProducts: () => void;
  fetchAllBunsProducts: () => void;
  fetchAllPiesProducts: () => void;
  data: StateProps[];
  setActivePage: (activePage: StateProps) => void
  activePage: BreadData | CakesData | PiesData | BunsData;
}

type ViewProps = {
  data: StateProps[];
  setActivePage: (activePage: StateProps) => void;
  activePage: StateProps;
}

type ControllerProps = {}
type OuterProps = {}
type ConnectorProps = {}



export type { StateProps, InnerProps, ViewProps }