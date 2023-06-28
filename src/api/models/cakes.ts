
type CakesData = {
    id: number,
    imageUrl: string,
    title: string,
    price: number
    total: number,
    category: string,
    descr: string
}

type CakesResponseData = {
    data: CakesData
}

export type { CakesResponseData, CakesData }