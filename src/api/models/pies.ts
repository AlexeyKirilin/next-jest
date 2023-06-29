type PiesData = {
    id: number,
    imageUrl: string,
    title: string,
    price: number
    total: number,
    category: string,
    descr: string
}

type PiesResponseData = {
    data: PiesData
}

export type { PiesResponseData, PiesData }