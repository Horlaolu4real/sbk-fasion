import styles from "./styles.module.scss";
import Image, { StaticImageData } from "next/image";
import { DesktopRatingIcon } from "@/assest/icon";
import Link from "next/link";

interface Props {
  image: StaticImageData;
  texts: string;
  amounts: number;
  leftbutton: string;
}

const TopProperties: React.FC<Props> = ({ image, texts, amounts, leftbutton }) => {
  return (
    <>
      <div className={styles.wrapper}>
        <Link href={"./shopping"}>
          <Image src={image} alt="mobile-Images" className={styles.image} />
        </Link>

        <div className={styles.content}>
          <div className={styles.newAmount}>
            <div className={styles.flxTxt}>
              <h6>{texts}</h6>
              <div className={styles.Price}>
                <p className={styles.newPrice}>N{amounts.toLocaleString()}</p>
                <p className={styles.oldPrice}>N49,750</p>
              </div>
              <div>
                <DesktopRatingIcon />
              </div>
            </div>
            <button className={styles.btn}>
              <p>{leftbutton}</p>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopProperties;