import "./Home.css";
import video from "./1.gif";
import Mail from "../mail/Mail";
import React from 'react';
import "./Home.css"
function Home() {
  return (
    <div className="row">
      <div
        className="col-12"
        style={{ position: "relative", marginLeft:'1%',marginRight:'1%', border: "2px solid red" }}
      >

        <img
          src={video}
          class="card-img-top"
          alt="..."
          style={{ width: "100%", height: "25vw" }}
        ></img>

        <h2
          style={{
            position: "absolute",
            top: "35%",
            left: "30%",
            color: "white",
          }}
        >
          BIZI TERCIH ETMELISINIZ CUNKU ...
        </h2>
      </div>
      <div className="container">
        <div
          className="row"
          style={{
            marginTop: "5%",
            border: "2px solid red",
            backgroundColor: "#f2f2f2",
          }}
        >
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div class="card" style={{ width: "400px" }}>
              <img
                class="card-img-top"
                src="https://www.atakurumsal.com/wp-content/uploads/2017/12/turkuaz-kart-350x204.jpg"
                alt="Card image"
                style={{ width: "100%" }}
              />
              <div class="card-body">
                <h4 class="card-title">John Doe</h4>
                <p class="card-text">
                  Some example text some example text. John Doe is an architect
                  and engineer
                </p>
                <a href="#" class="btn btn-primary">
                  See Profile
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div class="card" style={{ width: "400px" }}>
              <img
                class="card-img-top"
                src="https://www.atakurumsal.com/wp-content/uploads/2017/12/turkuaz-kart-350x204.jpg"
                alt="Card image"
                style={{ width: "100%" }}
              />
              <div class="card-body">
                <h4 class="card-title">John Doe</h4>
                <p class="card-text">
                  Some example text some example text. John Doe is an architect
                  and engineer
                </p>
                <a href="#" class="btn btn-primary">
                  See Profile
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div class="card" style={{ width: "400px" }}>
              <img
                class="card-img-top"
                src="https://www.atakurumsal.com/wp-content/uploads/2017/12/turkuaz-kart-350x204.jpg"
                alt="Card image"
                style={{ width: "100%" }}
              />
              <div class="card-body">
                <h4 class="card-title">John Doe</h4>
                <p class="card-text">
                  Some example text some example text. John Doe is an architect
                  and engineer
                </p>
                <a href="#" class="btn btn-primary">
                  See Profile
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div class="card" style={{ width: "fit-content" }}>
              <img
                class="card-img-top"
                src="https://www.atakurumsal.com/wp-content/uploads/2017/12/turkuaz-kart-350x204.jpg"
                alt="Card image"
                style={{ width: "100%" }}
              />
              <div class="card-body">
                <h4 class="card-title">John Doe</h4>
                <p class="card-text">
                  Some example text some example text. John Doe is an architect
                  and engineer
                </p>
                <a href="#" class="btn btn-primary">
                  See Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="row"
          style={{ marginTop: "5%", border: "2px solid red" }}
        >
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div class="card" style={{ width: "400px" }}>
              <img
                class="card-img-top"
                src="https://www.atakurumsal.com/wp-content/uploads/2017/12/turkuaz-kart-350x204.jpg"
                alt="Card image"
                style={{ width: "100%" }}
              />
              <div class="card-body">
                <h4 class="card-title">John Doe</h4>
                <p class="card-text">
                  Some example text some example text. John Doe is an architect
                  and engineer
                </p>
                <a href="#" class="btn btn-primary">
                  See Profile
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div class="card" style={{ width: "400px" }}>
              <img
                class="card-img-top"
                src="https://www.atakurumsal.com/wp-content/uploads/2017/12/turkuaz-kart-350x204.jpg"
                alt="Card image"
                style={{ width: "100%" }}
              />
              <div class="card-body">
                <h4 class="card-title">John Doe</h4>
                <p class="card-text">
                  Some example text some example text. John Doe is an architect
                  and engineer
                </p>
                <a href="#" class="btn btn-primary">
                  See Profile
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div class="card" style={{ width: "400px" }}>
              <img
                class="card-img-top"
                src="https://www.atakurumsal.com/wp-content/uploads/2017/12/turkuaz-kart-350x204.jpg"
                alt="Card image"
                style={{ width: "100%" }}
              />
              <div class="card-body">
                <h4 class="card-title">John Doe</h4>
                <p class="card-text">
                  Some example text some example text. John Doe is an architect
                  and engineer
                </p>
                <a href="#" class="btn btn-primary">
                  See Profile
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 col-12">
            <div class="card" style={{ width: "fit-content" }}>
              <img
                class="card-img-top"
                src="https://www.atakurumsal.com/wp-content/uploads/2017/12/turkuaz-kart-350x204.jpg"
                alt="Card image"
                style={{ width: "100%" }}
              />
              <div class="card-body">
                <h4 class="card-title">John Doe</h4>
                <p class="card-text">
                  Some example text some example text. John Doe is an architect
                  and engineer
                </p>
                <a href="#" class="btn btn-primary">
                  See Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="row"
          style={{ marginTop: "5%", border: "2px solid red" }}
        >
          <div
            className="row"
            style={{ marginTop: "5%", border: "2px solid red" }}
          >
            <ul style={{ display: "flex", justifyContent: "flex-start" }}>
              <li style={{ marginLeft: "30px", fontSize: "22px" }}>
                <b>HEPSI</b>
              </li>
              <li style={{ marginLeft: "30px", fontSize: "22px" }}>
                <b>OTURUM IZNI DANISMANLIK</b>
              </li>
              <li style={{ marginLeft: "30px", fontSize: "22px" }}>
                <b>TURK VATANDASLIGI</b>
              </li>
              <li style={{ marginLeft: "30px", fontSize: "22px" }}>
                <b>TURKUAZ KART</b>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="card" style={{ width: "400px" }}>
              <img
                class="card-img-top"
                src="https://www.atakurumsal.com/wp-content/uploads/2017/12/turkuaz-kart-350x204.jpg"
                alt="Card image"
                style={{ width: "100%" }}
              />
              <div class="card-body">
                <h4 class="card-title">John Doe</h4>
                <p class="card-text">
                  Some example text some example text. John Doe is an architect
                  and engineer
                </p>
                <a href="#" class="btn btn-primary">
                  See Profile
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="card" style={{ width: "400px" }}>
              <img
                class="card-img-top"
                src="https://www.atakurumsal.com/wp-content/uploads/2017/12/turkuaz-kart-350x204.jpg"
                alt="Card image"
                style={{ width: "100%" }}
              />
              <div class="card-body">
                <h4 class="card-title">John Doe</h4>
                <p class="card-text">
                  Some example text some example text. John Doe is an architect
                  and engineer
                </p>
                <a href="#" class="btn btn-primary">
                  See Profile
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div class="card" style={{ width: "400px" }}>
              <img
                class="card-img-top"
                src="https://www.atakurumsal.com/wp-content/uploads/2017/12/turkuaz-kart-350x204.jpg"
                alt="Card image"
                style={{ width: "100%" }}
              />
              <div class="card-body">
                <h4 class="card-title">John Doe</h4>
                <p class="card-text">
                  Some example text some example text. John Doe is an architect
                  and engineer
                </p>
                <a href="#" class="btn btn-primary">
                  See Profile
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="col-12"
          style={{ marginTop: "5%", border: "2px solid red" }}
        >
          <img
            src="https://www.atakurumsal.com/wp-content/uploads/2017/12/features.jpg?id=1766"
            class="card-img-top"
            alt="..."
            style={{ width: "100%", height: "15vw" }}
          ></img>
        </div>

        <div
          className="col-12"
          style={{ marginTop: "5%", border: "2px solid red" }}
        >
          <h1>BILGI BANKASI</h1>

          <div className="row" style={{ backgroundColor: "#ffffff" }}>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div class="card" style={{ width: "400px" }}>
                <img
                  class="card-img-top"
                  src="https://www.atakurumsal.com/wp-content/uploads/2017/12/turkuaz-kart-350x204.jpg"
                  alt="Card image"
                  style={{ width: "100%" }}
                />
                <div class="card-body">
                  <h4 class="card-title">John Doe</h4>
                  <p class="card-text">
                    Some example text some example text. John Doe is an
                    architect and engineer
                  </p>
                  <a href="#" class="btn btn-primary">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div class="card" style={{ width: "400px" }}>
                <img
                  class="card-img-top"
                  src="https://www.atakurumsal.com/wp-content/uploads/2017/12/turkuaz-kart-350x204.jpg"
                  alt="Card image"
                  style={{ width: "100%" }}
                />
                <div class="card-body">
                  <h4 class="card-title">John Doe</h4>
                  <p class="card-text">
                    Some example text some example text. John Doe is an
                    architect and engineer
                  </p>
                  <a href="#" class="btn btn-primary">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div class="card" style={{ width: "400px" }}>
                <img
                  class="card-img-top"
                  src="https://www.atakurumsal.com/wp-content/uploads/2017/12/turkuaz-kart-350x204.jpg"
                  alt="Card image"
                  style={{ width: "100%" }}
                />
                <div class="card-body">
                  <h4 class="card-title">John Doe</h4>
                  <p class="card-text">
                    Some example text some example text. John Doe is an
                    architect and engineer
                  </p>
                  <a href="#" class="btn btn-primary">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div class="card" style={{ width: "fit-content" }}>
                <img
                  class="card-img-top"
                  src="https://www.atakurumsal.com/wp-content/uploads/2017/12/turkuaz-kart-350x204.jpg"
                  alt="Card image"
                  style={{ width: "100%" }}
                />
                <div class="card-body">
                  <h4 class="card-title">John Doe</h4>
                  <p class="card-text">
                    Some example text some example text. John Doe is an
                    architect and engineer
                  </p>
                  <a href="#" class="btn btn-primary">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="row" style={{ backgroundColor: "#ffffff" }}>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div class="card" style={{ width: "400px" }}>
                <img
                  class="card-img-top"
                  src="https://www.atakurumsal.com/wp-content/uploads/2017/12/turkuaz-kart-350x204.jpg"
                  alt="Card image"
                  style={{ width: "100%" }}
                />
                <div class="card-body">
                  <h4 class="card-title">John Doe</h4>
                  <p class="card-text">
                    Some example text some example text. John Doe is an
                    architect and engineer
                  </p>
                  <a href="#" class="btn btn-primary">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div class="card" style={{ width: "400px" }}>
                <img
                  class="card-img-top"
                  src="https://www.atakurumsal.com/wp-content/uploads/2017/12/turkuaz-kart-350x204.jpg"
                  alt="Card image"
                  style={{ width: "100%" }}
                />
                <div class="card-body">
                  <h4 class="card-title">John Doe</h4>
                  <p class="card-text">
                    Some example text some example text. John Doe is an
                    architect and engineer
                  </p>
                  <a href="#" class="btn btn-primary">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div class="card" style={{ width: "400px" }}>
                <img
                  class="card-img-top"
                  src="https://www.atakurumsal.com/wp-content/uploads/2017/12/turkuaz-kart-350x204.jpg"
                  alt="Card image"
                  style={{ width: "100%" }}
                />
                <div class="card-body">
                  <h4 class="card-title">John Doe</h4>
                  <p class="card-text">
                    Some example text some example text. John Doe is an
                    architect and engineer
                  </p>
                  <a href="#" class="btn btn-primary">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div class="card" style={{ width: "fit-content" }}>
                <img
                  class="card-img-top"
                  src="https://www.atakurumsal.com/wp-content/uploads/2017/12/turkuaz-kart-350x204.jpg"
                  alt="Card image"
                  style={{ width: "100%" }}
                />
                <div class="card-body">
                  <h4 class="card-title">John Doe</h4>
                  <p class="card-text">
                    Some example text some example text. John Doe is an
                    architect and engineer
                  </p>
                  <a href="#" class="btn btn-primary">
                    See Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <h3>
          YABANCILAR ICIN DANISMANLIK FIRMASI SECERKEN DIKKAT ETMESI GEREKEN
          HUSUSLAR
        </h3>
      </div>
      <Mail/>
    </div>
  );
}

export default Home;

