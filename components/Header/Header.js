import Link from "next/link";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.container}>
      <nav>
        <ul>
          <li>
            <Link href="/candies">
              <a>candies</a>
            </Link>
          </li>
          <li>
            <Link href="/topicals-tinctures">
              <a>topicals &amp; tinctures</a>
            </Link>
          </li>
          <li>
            <Link href="/pets">
              <a>pets</a>
            </Link>
          </li>
          <li>
            <Link href="/culinary">
              <a>culinary</a>
            </Link>
          </li>
          <li>
            <Link href="/accessories">
              <a>accessories</a>
            </Link>
          </li>
          <li>
            <Link href="/coa">
              <a>coa</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>about</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
