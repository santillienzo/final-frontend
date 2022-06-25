export interface Product{
    id: number;
    image: string;
    name: string;
    description: string;
    price: number;
}

export interface ProductCart extends Product{
    quantity: number
}