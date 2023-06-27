import { BreadData, BunsData, CakesData, PiesData } from "store/reducers/types";

type StateProps = {
    breadData: BreadData,
    cakesData: CakesData,
    piesData: PiesData,
    bunsData: BunsData,
}

type OuterProps = {
    data: StateProps[]
}

export type { OuterProps }