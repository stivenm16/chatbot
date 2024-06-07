export type Rol = 'user' | 'bot'
export interface Message {
  text?: string
  rol?: Rol
}
