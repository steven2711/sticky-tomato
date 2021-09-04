import styles from "./ProductCard.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ data: { name, images, price } }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <Image
          src={images[1]}
          layout="fill"
          objectFit="cover"
          className={styles.image}
        />
      </div>
      <div className={styles.cardBody}>
        <h2>{name}</h2>
        <p>{price}</p>
      </div>
    </div>
  );
}
