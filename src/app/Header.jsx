import Image from 'next/image';
import logo from './images/logo.jpg'

export default function header() {
  return (
    <header>
      <nav>
        <div id="navbar_logo">
          <Image src={logo} width={50} height={50} />
        </div>
        <ul id="navbar_links">
          <li class="navbar_item"><a href="/">Home</a></li>
          <li class="navbar_item"><a href="/about">Info</a></li>
        </ul>
      </nav>
    </header>);
}
