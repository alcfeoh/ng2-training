

export class SmartEnum<T> {

  indexes: Array<number> = [];
  values: Array<T> = [];

  constructor(private enumType : T){
    for (let v in enumType) {
      if (!isNaN(+v)) {
        this.indexes.push(+v);
        this.values.push(enumType[+v]);
      }
    }
  }

  getIndexes(): Array<number> {
    return this.indexes;
  }

  getValues(): Array<T> {
    return this.values;
  }

  getValue(index : number) : T {
    return this.enumType[index];
  }

}
