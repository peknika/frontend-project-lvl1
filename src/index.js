import styles from './styles.css';
import { add, subtract } from './math';

if (module.hot) {
  module.hot.accept();
}

const resultA = add(2, 3);
const resultB = subtract(5, 1);
console.log(resultA, resultB);
console.log(styles.localClass);
console.log(styles.globalClass);
console.log(process.env.NODE_ENV);
