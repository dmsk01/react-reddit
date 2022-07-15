export function pipe<U>(...fns: Function[]) {
  return <E,>(initialValue: any): U =>
    fns.reduce((prevFnVal, fn) => fn(prevFnVal), initialValue)
}