export interface User {
    id: number,
    name: string,
    lastname: string,
    description: string
  }
export interface Product {
    id: number,
    name: string,
    price: number,
    description: string,
    discount:string
  }
export interface Order {
    id: number,
    name: string,
    delivery: string,
    client: number,
    arrival: string
  }

