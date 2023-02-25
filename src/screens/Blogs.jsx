import React from "react";
import { Link } from "react-router-dom";

const Blogs = () => {
  return (
    <div>
      <>
        {/* Responsive navbar*/}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <Link className="navbar-brand" href="#!">
              Start Bootstrap
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" href="#">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#!">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="#!">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Page header with logo and tagline*/}
        <header className="py-5 bg-light border-bottom mb-4">
          <div className="container">
            <div className="text-center my-5">
              <h1 className="fw-bolder">Welcome to Blog Home!</h1>
              <p className="lead mb-0">
                A Bootstrap 5 starter layout for your next blog homepage
              </p>
            </div>
          </div>
        </header>
        {/* Page content*/}
        <div className="container">
          <div className="row">
            {/* Blog entries*/}
            <div className="col-lg-8">
              {/* Featured blog post*/}
              <div className="card mb-4">
                <Link href="#!">
                  <img
                    className="card-img-top"
                    src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg"
                    alt="..."
                  />
                </Link>
                <div className="card-body">
                  <div className="small text-muted">January 1, 2022</div>
                  <h2 className="card-title">Featured Post Title</h2>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a
                    laboriosam. Dicta expedita corporis animi vero voluptate
                    voluptatibus possimus, veniam magni quis!
                  </p>
                  <Link className="btn btn-primary" href="#!">
                    Read more →
                  </Link>
                </div>
              </div>
              {/* Nested row for non-featured blog posts*/}
              <div className="row">
                <div className="col-lg-6">
                  {/* Blog post*/}
                  <div className="card mb-4">
                    <Link href="#!">
                      <img
                        className="card-img-top"
                        src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                        alt="..."
                      />
                    </Link>
                    <div className="card-body">
                      <div className="small text-muted">January 1, 2022</div>
                      <h2 className="card-title h4">Post Title</h2>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Reiciendis aliquid atque, nulla.
                      </p>
                      <Link className="btn btn-primary" href="#!">
                        Read more →
                      </Link>
                    </div>
                  </div>
                  {/* Blog post*/}
                  <div className="card mb-4">
                    <Link href="#!">
                      <img
                        className="card-img-top"
                        src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                        alt="..."
                      />
                    </Link>
                    <div className="card-body">
                      <div className="small text-muted">January 1, 2022</div>
                      <h2 className="card-title h4">Post Title</h2>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Reiciendis aliquid atque, nulla.
                      </p>
                      <Link className="btn btn-primary" href="#!">
                        Read more →
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  {/* Blog post*/}
                  <div className="card mb-4">
                    <Link href="#!">
                      <img
                        className="card-img-top"
                        src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                        alt="..."
                      />
                    </Link>
                    <div className="card-body">
                      <div className="small text-muted">January 1, 2022</div>
                      <h2 className="card-title h4">Post Title</h2>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Reiciendis aliquid atque, nulla.
                      </p>
                      <Link className="btn btn-primary" href="#!">
                        Read more →
                      </Link>
                    </div>
                  </div>
                  {/* Blog post*/}
                  <div className="card mb-4">
                    <Link href="#!">
                      <img
                        className="card-img-top"
                        src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg"
                        alt="..."
                      />
                    </Link>
                    <div className="card-body">
                      <div className="small text-muted">January 1, 2022</div>
                      <h2 className="card-title h4">Post Title</h2>
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Reiciendis aliquid atque, nulla? Quos cum ex quis
                        soluta, a laboriosam.
                      </p>
                      <Link className="btn btn-primary" href="#!">
                        Read more →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* Pagination*/}
              <nav aria-label="Pagination">
                <hr className="my-0" />
                <ul className="pagination justify-content-center my-4">
                  <li className="page-item disabled">
                    <Link
                      className="page-link"
                      href="#"
                      tabIndex={-1}
                      aria-disabled="true"
                    >
                      Newer
                    </Link>
                  </li>
                  <li className="page-item active" aria-current="page">
                    <Link className="page-link" href="#!">
                      1
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" href="#!">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" href="#!">
                      3
                    </Link>
                  </li>
                  <li className="page-item disabled">
                    <Link className="page-link" href="#!">
                      ...
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" href="#!">
                      15
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" href="#!">
                      Older
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            {/* Side widgets*/}
            <div className="col-lg-4">
              {/* Search widget*/}
              <div className="card mb-4">
                <div className="card-header">Search</div>
                <div className="card-body">
                  <div className="input-group">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter search term..."
                      aria-label="Enter search term..."
                      aria-describedby="button-search"
                    />
                    <button
                      className="btn btn-primary"
                      id="button-search"
                      type="button"
                    >
                      Go!
                    </button>
                  </div>
                </div>
              </div>
              {/* Categories widget*/}
              <div className="card mb-4">
                <div className="card-header">Categories</div>
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <Link href="#!">Web Design</Link>
                        </li>
                        <li>
                          <Link href="#!">HTML</Link>
                        </li>
                        <li>
                          <Link href="#!">Freebies</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-6">
                      <ul className="list-unstyled mb-0">
                        <li>
                          <Link href="#!">JavaScript</Link>
                        </li>
                        <li>
                          <Link href="#!">CSS</Link>
                        </li>
                        <li>
                          <Link href="#!">Tutorials</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* Side widget*/}
              <div className="card mb-4">
                <div className="card-header">Side Widget</div>
                <div className="card-body">
                  You can put anything you want inside of these side widgets.
                  They are easy to use, and feature the Bootstrap 5 card
                  component!
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Blogs;
