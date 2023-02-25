import React from "react";
import { Link } from "react-router-dom";

const VlogsScreen = () => {
  return (
    <div>
      <>
        {/* Page Content */}
        <div className="container mt-5 pt-3">
          {/* Page Heading */}
          <h1 className="my-4">Vlogs</h1>
          {/* Project One */}
          <div className="row">
            <div className="col-md-7">
              <Link href="#">
                <img
                  className="img-fluid rounded mb-3 mb-md-0"
                  src="https://via.placeholder.com/700x300"
                  alt=""
                />
              </Link>
            </div>
            <div className="col-md-5">
              <h3>Project One</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium veniam exercitationem expedita laborum at voluptate.
                Labore, voluptates totam at aut nemo deserunt rem magni pariatur
                quos perspiciatis atque eveniet unde.
              </p>
              <Link className="btn btn-primary" href="#">
                View Project
              </Link>
            </div>
          </div>
          {/* /.row */}
          <hr />
          {/* Project Two */}
          <div className="row">
            <div className="col-md-7">
              <Link href="#">
                <img
                  className="img-fluid rounded mb-3 mb-md-0"
                  src="https://via.placeholder.com/700x300"
                  alt=""
                />
              </Link>
            </div>
            <div className="col-md-5">
              <h3>Project Two</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut,
                odit velit cumque vero doloremque repellendus distinctio maiores
                rem expedita a nam vitae modi quidem similique ducimus! Velit,
                esse totam tempore.
              </p>
              <Link className="btn btn-primary" href="#">
                View Project
              </Link>
            </div>
          </div>
          {/* /.row */}
          <hr />
          {/* Project Three */}
          <div className="row">
            <div className="col-md-7">
              <Link href="#">
                <img
                  className="img-fluid rounded mb-3 mb-md-0"
                  src="https://via.placeholder.com/700x300"
                  alt=""
                />
              </Link>
            </div>
            <div className="col-md-5">
              <h3>Project Three</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis,
                temporibus, dolores, at, praesentium ut unde repudiandae
                voluptatum sit ab debitis suscipit fugiat natus velit excepturi
                amet commodi deleniti alias possimus!
              </p>
              <Link className="btn btn-primary" href="#">
                View Project
              </Link>
            </div>
          </div>
          {/* /.row */}
          <hr />
          {/* Project Four */}
          <div className="row">
            <div className="col-md-7">
              <Link href="#">
                <img
                  className="img-fluid rounded mb-3 mb-md-0"
                  src="https://via.placeholder.com/700x300"
                  alt=""
                />
              </Link>
            </div>
            <div className="col-md-5">
              <h3>Project Four</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo, quidem, consectetur, officia rem officiis illum
                aliquam perspiciatis aspernatur quod modi hic nemo qui soluta
                aut eius fugit quam in suscipit?
              </p>
              <Link className="btn btn-primary" href="#">
                View Project
              </Link>
            </div>
          </div>
          {/* /.row */}
          <hr />
          {/* Pagination */}
          <ul className="pagination justify-content-center">
            <li className="page-item">
              <Link className="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">«</span>
                <span className="sr-only">Previous</span>
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="#">
                1
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="#">
                2
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="#">
                3
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">»</span>
                <span className="sr-only">Next</span>
              </Link>
            </li>
          </ul>
        </div>
        {/* /.container */}
      </>
    </div>
  );
};

export default VlogsScreen;
