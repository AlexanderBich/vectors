import {VectorOperationsManager} from "./VectorOperationsManager";
import {Vector} from "./Vector";

function main() {
  const vectorA = new Vector(1, 3, 4);
  const vectorB = new Vector(2, 7, -5);
  const crossProductOfTwoVectors = VectorOperationsManager.crossProductOfTwoVectors(vectorA, vectorB);
  const dotProductOfTwoVectors = VectorOperationsManager.dotProductOfTwoVectors(vectorA, vectorB);

  console.log('cross product of two vectors: ' + crossProductOfTwoVectors)
  console.log('dot product of two vectors: ' + dotProductOfTwoVectors)
}

main();