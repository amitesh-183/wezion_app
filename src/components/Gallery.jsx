import React from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div>
      <>
        {/* Page Content */}
        <div className="container">
          <h1 className="fw-light text-center text-lg-start mt-4 mb-0">
            Wezion Gallery
          </h1>
          <hr className="mt-2 mb-5" />
          <div className="row text-center text-lg-start">
            <div className="col-lg-3 col-md-4 col-6">
              <Link href="#" className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/pWkk7iiCoDM/400x300"
                  alt=""
                />
              </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <Link href="#" className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/aob0ukAYfuI/400x300"
                  alt=""
                />
              </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <Link href="#" className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/EUfxH-pze7s/400x300"
                  alt=""
                />
              </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <Link href="#" className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/M185_qYH8vg/400x300"
                  alt=""
                />
              </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <Link href="#" className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/sesveuG_rNo/400x300"
                  alt=""
                />
              </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <Link href="#" className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/AvhMzHwiE_0/400x300"
                  alt=""
                />
              </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <Link href="#" className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/2gYsZUmockw/400x300"
                  alt=""
                />
              </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <Link href="#" className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/EMSDtjVHdQ8/400x300"
                  alt=""
                />
              </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <Link href="#" className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/8mUEy0ABdNE/400x300"
                  alt=""
                />
              </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <Link href="#" className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/G9Rfc1qccH4/400x300"
                  alt=""
                />
              </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <Link href="#" className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/aJeH0KcFkuc/400x300"
                  alt=""
                />
              </Link>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <Link href="#" className="d-block mb-4 h-100">
                <img
                  className="img-fluid img-thumbnail"
                  src="https://source.unsplash.com/p2TQ-3Bh3Oo/400x300"
                  alt=""
                />
              </Link>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Gallery;
