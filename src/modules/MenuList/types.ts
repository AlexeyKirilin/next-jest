import { BreadData, BunsData, CakesData, PiesData } from "store/reducers/types";

type StateProps = {
    breadData: BreadData,
    cakesData: CakesData,
    piesData: PiesData,
    bunsData: BunsData,
}

type OuterProps = {
    data: BreadData | CakesData | PiesData | BunsData
}

export type { OuterProps }