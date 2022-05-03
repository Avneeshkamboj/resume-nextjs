import React, {useState} from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
    //console.log('router obj', router.pathname);
    const Active = router.pathname;
    const [isActive, setActive] = useState("false");
    const mobileNav = () => {
      
      setActive(!isActive);
    }

  return (
    <header id="header" className={Active !== '/' ? 'header-top': ''}>
    <div className="container">

      <h1><a href="#">Emily Jones</a></h1>
      {/* <!-- Uncomment below if you prefer to use an image logo -->
      <!-- <a href="index.html" className="mr-auto"><img src="assets/img/logo.png" alt="" className="img-fluid"></a> --> */}
      <h2>I'm a passionate <span>graphic designer</span> from New York</h2>

      <nav id="navbar" className={isActive ? "navbar" : "navbar navbar-mobile"}>
        <ul>
          <li><Link href="/"><a className={Active === '/' ? 'nav-link active': 'nav-link'}>Home</a></Link></li>
          <li><Link href="/about"><a className={Active === '/about' ? 'nav-link active': 'nav-link'}>About</a></Link></li>
          <li><Link href="/resume"><a className={Active === '/resume' ? 'nav-link active': 'nav-link'}>Resume</a></Link></li>
          <li><Link href="/services"><a className={Active === '/services' ? 'nav-link active': 'nav-link'}>Services</a></Link></li>
          <li><Link href="/portfolio"><a className={Active === '/portfolio' ? 'nav-link active': 'nav-link'}>Portfolio</a></Link></li>
          <li><Link href="/contact"><a className={Active === '/contact' ? 'nav-link active': 'nav-link'}>Contact</a></Link></li>
        </ul>
        <i className={isActive ? "bi bi-list mobile-nav-toggle" : "bi mobile-nav-toggle bi-x"} onClick={mobileNav}></i>
      </nav>

      <div className="social-links">
        <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
        <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
        <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
        <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
      </div>

    </div>
  </header>
  )
}

export default Header