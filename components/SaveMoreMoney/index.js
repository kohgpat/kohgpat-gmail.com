import Title from "../Title";
import Button from '../Button';
import styles from "./index.module.css";

const SaveMoreMoney = () => (
  <div className={styles.saveMoreMoney}>
    <Title as="h4">Save more money</Title>

    <p className={styles.text}>
      Eiusmod tempor incididunt ui labore et doloro magna aliqua. Ut enim ad
      minim.
    </p>

    <Button type="button" className={styles.button}>
      View tips
    </Button>
  </div>
);

export default SaveMoreMoney;
