import {Vector} from "./Vector";

export abstract class VectorOperationsManager {
  public static crossProductOfTwoVectors(vectorA: Vector, vectorB: Vector): Vector {
    const resultVectorXComponent = vectorA.componentY * vectorB.componentZ - vectorA.componentZ * vectorB.componentY;
    const resultVectorYComponent = vectorA.componentZ * vectorB.componentX - vectorA.componentX * vectorB.componentZ;
    const resultVectorZComponent = vectorA.componentX * vectorB.componentY - vectorA.componentY * vectorB.componentX;

    return new Vector(resultVectorXComponent, resultVectorYComponent, resultVectorZComponent);
  }

  public static dotProductOfTwoVectors(vectorA: Vector, vectorB: Vector): number {
    const multipleOfXComponents = vectorA.componentX * vectorB.componentX;
    const multipleOfYComponents = vectorA.componentY * vectorB.componentY;
    const multipleOfZComponents = vectorA.componentZ * vectorB.componentZ;

    return multipleOfXComponents + multipleOfYComponents + multipleOfZComponents;
   }
}