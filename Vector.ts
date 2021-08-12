export class Vector {
  private readonly _componentX: number;
  private readonly _componentY: number;
  private readonly _componentZ: number;

  constructor(componentX: number, componentY: number, componentZ: number = 0) {
    this._componentX = componentX;
    this._componentY = componentY;
    this._componentZ = componentZ;
  }

  get componentX(): number {
    return this._componentX;
  }

  get componentY(): number {
    return this._componentY;
  }

  get componentZ(): number {
    return this._componentZ;
  }

  public toString(): string {
    return '<' + this.componentX + ', ' + this.componentY + ', ' + this.componentZ + '>';
  }
}