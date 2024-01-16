declare type AnyFunction = (...args: any[]) => any

declare type NormalObject = Record<string, any>

declare type Nullable<T> = T | null | undefined

declare type DeepNonNullable<T> = {
  [P in keyof T]: T[P] extends object ? DeepNonNullable<T[P]> : NonNullable<T[P]>
}