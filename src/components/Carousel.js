import React from 'react'

const carousel = () => {
    return (
        <div>
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
            </div>

            <div className="carousel-inner">
                <div className="carousel-caption" style={{zIndex:"10"}}>
                    <form class="d-flex">
                        <input class="form-control me-2" type="text" placeholder="Search" />
                        <button class="btn btn-primary" type="button">Search</button>
                    </form>
                </div>
                <div className="carousel-item active">
                    <img src="/food1.jpg" alt="Los Angeles" className="d-block" style={{ width: "100%", height: "700px",filter:"brightness(30%)" }} />
                </div>
                <div className="carousel-item">
                    <img src="/food2.jpg" alt="Chicago" className="d-block" style={{ width: "100%", height: "700px",filter:"brightness(30%)" }} />
                </div>
                <div className="carousel-item">
                    <img src="/food3.jpg" alt="New York" className="d-block" style={{ width: "100%", height: "700px",filter:"brightness(30%)" }} />
                </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
            </button>
        </div>
    )
}

export default carousel