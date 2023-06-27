type BunsData = {
    id: number,
    imageUrl: string,
    title: string,
    price: number
    total: number,
    category: string,
    descr: string
}

type BunsResponseData = {
    data: BunsData
}

export type {BunsResponseData}