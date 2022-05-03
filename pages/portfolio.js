import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {Card, CardGroup} from 'react-bootstrap'
import port1 from "../assets/img/portfolio/portfolio-1.jpg"
import port2 from "../assets/img/portfolio/portfolio-2.jpg"
import port3 from "../assets/img/portfolio/portfolio-3.jpg"
import port4 from "../assets/img/portfolio/portfolio-4.jpg"
import port5 from "../assets/img/portfolio/portfolio-5.jpg"
//import "../assets/js/main.js";

const portfolio = () => {
  return (
    <section id="portfolio" className="portfolio">
    <div className="container">

      <div className="section-title">
        <h2>Portfolio</h2>
        <p>My Works</p>
      </div>

      {/* <div className="row">
        <div className="col-lg-12 d-flex justify-content-center">
          <ul id="portfolio-flters">
            <li data-filter="*" className="filter-active">All</li>
            <li data-filter=".filter-app">App</li>
            <li data-filter=".filter-card">Card</li>
            <li data-filter=".filter-web">Web</li>
          </ul>
        </div>
      </div> */}
<CardGroup>
  <Card  bg="dark">
    <Image variant="top" src={port1} width="419px" height="200px" alt=""  />
    <Card.Body>
      <Card.Title>Portfolio 1</Card.Title>
      <Card.Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat quis urna nec condimentum. Vestibulum nec congue nulla. Sed id ultrices ex, sit amet consequat mi.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      {/* <small className="text-muted">Last updated 3 mins ago</small> */}
      <Link href="/">Read More</Link>
    </Card.Footer>
  </Card>
  <Card style={{margin:"0px 20px"}}  bg="dark">
  <Image variant="top" src={port2}width="419px" height="200px" alt=""  />
    <Card.Body>
      <Card.Title>Portfolio 2</Card.Title>
      <Card.Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat quis urna nec condimentum. Vestibulum nec congue nulla. Sed id ultrices ex, sit amet consequat mi.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      {/* <small className="text-muted">Last updated 3 mins ago</small> */}
      <Link href="/">Read More</Link>
    </Card.Footer>
  </Card>
  <Card  bg="dark">
  <Image variant="top" src={port3} width="419px" height="200px" alt="" />
    <Card.Body>
      <Card.Title>Portfolio 3</Card.Title>
      <Card.Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam volutpat quis urna nec condimentum. Vestibulum nec congue nulla. Sed id ultrices ex, sit amet consequat mi.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      {/* <small className="text-muted">Last updated 3 mins ago</small> */}
      <Link href="/">Read More</Link>
    </Card.Footer>
  </Card>
</CardGroup>
    

    </div>
  </section>
  )
}

export default portfolio