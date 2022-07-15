export function compose<U>(...fns: Function[]) {
  return <E,>(initialValue: any): U =>
    fns.reduceRight((prevFnVal, fn) => fn(prevFnVal), initialValue)
}