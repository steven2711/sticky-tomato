import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.container}>
      <nav>
        <div className={styles.imageContainer}>
          <Image
            src="/images/sticky-tomato-logo.png"
            width={300}
            height={80}
            layout="fill"
          />
        </div>
        <ul>
          <li>
            <Link href="/products">
              <a>Shop</a>
            </Link>
          </li>
          <li>
            <Link href="/locations">
              <a>Locations</a>
            </Link>
          </li>
          <li>
            <Link href="/faq">
              <a>FAQ</a>
            </Link>
          </li>
          <li>
            <Link href="/wholesale">
              <a>Wholesale</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
