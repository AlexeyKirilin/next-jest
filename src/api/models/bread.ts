type BreadData = {
    id: number,
    title: string,
    imageUrl: string,
    price: number
    total: number,
    category: string,
    descr: string;
}

type BreadResponseData = {
    data: BreadData
}

export type {BreadResponseData}