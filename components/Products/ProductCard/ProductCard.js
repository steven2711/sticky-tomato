import styles from "./ProductCard.module.scss";
import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  console.log(product);

  // const defaultImage = `${process.env.NEXT_PUBLIC_STRAPI_URL}${images[0].formats.small.url}`;

  return (
    <div className={styles.card}>
      {/* <div className={styles.cardHeader}>
        <Image
          src={defaultImage}
          layout="fill"
          objectFit="cover"
          className={styles.image}
        />
      </div>
      <div className={styles.cardBody}>
        <h2>{name}</h2>
        <p>{price}</p>
      </div> */}
    </div>
  );
}
