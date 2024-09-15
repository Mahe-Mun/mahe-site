import Image from 'next/image';
import logo from './images/logo.jpg'

export default function header() {
  return (
    <header>
      <nav>
        <div id="navbar_logo">
          <Image src={logo} alt="MUN logo" width={50} height={50} />
        </div>
        <ul id="navbar_links">
          <li className="navbar_item"><a href="/">Home</a></li>
          <li className="navbar_item"><a href="/about">About Us</a></li>
        </ul>
      </nav>
    </header>);
}
