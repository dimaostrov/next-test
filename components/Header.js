import Link from 'next/link';

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <Link href="/ocean">
      <a style={linkStyle}>Ocean</a>
    </Link>
    <Link href="/box">
      <a style={linkStyle}>Box</a>
    </Link>
    <Link href="/sphere">
      <a style={linkStyle}>Sphere</a>
    </Link>
  </div>
)

export default Header