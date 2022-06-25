import styles from "./Header.module.css";
import igniteLogo from "../images/igniteLogo.svg";

export const Header = () => {
  return (
    <div className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do ignite" />
      <strong>Ignite Feed</strong>
    </div>
  );
};
