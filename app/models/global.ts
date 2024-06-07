export type Rol = 'user' | 'bot'
export interface Message {
  text?: string
  rol?: Rol
}

export interface Product {
  id: string
  displayTitle: string
  embeddingText: string
  url: string
  shopifyProductId: string
  imageUrl: string
  productType: string
  discount: boolean
  variants: string
  price: string
}
