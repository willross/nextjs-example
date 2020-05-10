import Link from "next/link";
import { FormattedMessage } from 'react-intl'

export default ({ children }) => (
  <>
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a><FormattedMessage id="nav.home" /></a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a><FormattedMessage id="nav.about" /></a>
          </Link>
        </li>
      </ul>
    </nav>
    {children}
  </>
);
