import "./Home.css";
import womanimg from "../Assets/womanandphone.jpg";
import city from "../Assets/city.jpg";
const Homme = () => {
  return (
    <main>
      <header>
        <div>
          <h1>
            Scooter sharing
            <br /> made simple
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
            <br />
            laboriosam soluta eligendi reprehenderit nulla ullam saepe ipsam
            <br />
            accusantium quos fugiat?
          </p>
          <button>Get Scootin</button>
        </div>
      </header>
      {/* section one of our home page  */}
      <section className="sectionone">
        <div>
          <i class="fas fa-mobile"></i>
          <h2>Locate with App</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
            iusto ut animi impedit unde minus nam eos nihil rerum eligendi.
          </p>
        </div>
        <div>
          <i class="fas fa-motorcycle"></i>
          <h2>Locate with App</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
            iusto ut animi impedit unde minus nam eos nihil rerum eligendi.
          </p>
        </div>
        <div>
          <i class="fas fa-biking"></i>
          <h2>Locate with App</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
            iusto ut animi impedit unde minus nam eos nihil rerum eligendi.
          </p>
        </div>
      </section>
      {/* section two of our homepage  */}

      <section className="sectiontwo">
        <div className="divone">
          <h2>Easy to use riding telemetry</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
            nobis harum debitis fuga sunt nam quasi, suscipit tenetur itaque
            porro dolores voluptate numquam dolorum cupiditate natus soluta
            cumque nesciunt cum.
          </p>
          <button>lerarn more</button>
        </div>
        <div>
          <img src={womanimg} alt="" />
        </div>
      </section>

      {/* section two of our homepage  */}

      <section className="sectiontwo">
        <div>
          <img src={city} alt="" />
        </div>
        <div className="divtwo">
          <h2>Easy to use riding telemetry</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
            nobis harum debitis fuga sunt nam quasi, suscipit tenetur itaque
            porro dolores voluptate numquam dolorum cupiditate natus soluta
            cumque nesciunt cum.
          </p>
          <button>lerarn more</button>
        </div>
      </section>
    </main>
  );
};

export default Homme;
