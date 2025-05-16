import styles from "./styles.module.scss";
import Image, { StaticImageData } from "next/image";
import { DesktopRatingIcon } from "@/assest/icon";
import Link from "next/link";

interface Props {
  imag: StaticImageData;
  text: string;
  amount: number;
  leftbt: string;
}

const DesktopProperties: React.FC<Props> = ({ imag, text, amount, leftbt }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <Link href={"./shopping"}>
          <Image src={imag} alt="mobile-Images" className={styles.image} />
        </Link>

        <div className={styles.content}>
          <div className={styles.newAmount}>
            <div className={styles.flxTxt}>
              <h6>{text}</h6>
              <div className={styles.Price}>
                <p className={styles.newPrice}>N{amount.toLocaleString()}</p>
                <p className={styles.oldPrice}>N49,750</p>
              </div>
              <div>
                <DesktopRatingIcon />
              </div>
            </div>
            <button className={styles.btn}>
              <p>{leftbt}</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopProperties;
