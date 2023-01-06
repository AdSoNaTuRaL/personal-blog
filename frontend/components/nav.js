import React from "react"
import Link from "next/link"

const Nav = ({ categories }) => {
  return (
    <div>
      <nav className="uk-navbar-container" data-uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <Link href="/" passHref>
                <div
                  className="uk-logo"
                  style={{
                    borderRadius: "60%",
                    overflow: "hidden",
                    marginLeft: "60px",
                    marginTop: "10px",
                    cursor: "pointer",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo.jpg" alt="logo" height={80} width={80} />
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            {categories.map((category) => {
              return (
                <li key={category.id}>
                  <Link href={`/category/${category.attributes.slug}`}>
                    <a className="uk-link-reset">{category.attributes.name}</a>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav
