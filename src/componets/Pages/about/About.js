import "../about/About.css";
import women from "../../Assets/womanandphone.jpg";
import city from "../../Assets/city.jpg";
import { useState } from "react";
import { Faqs } from "./faq";
import { Driving } from "./faq";
const About = () => {
  const [hide, setHide] = useState(null);
  const [hide2, setHide2] = useState(null);

  const handleClick = (i) => {
    if (hide === i) {
      return setHide(null);
    }

    setHide(i);
    console.log(i);
  };

  const handleClick2 = (ix) => {
    if (hide2 === ix) {
      return setHide2(null);
    }
    setHide2(ix);
  };

  return (
    <div>
      <div className="abouthero">
        <h2>About</h2>
      </div>

      {/* section two about  */}

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
          <img src={women} alt="" />
        </div>
      </section>

      {/* section 3  */}
      <div className="ourValue">
        <h2>Our Values</h2>
        <div className="Ourvaluelist">
          <div>
            <img src={city} alt="" />
            <p>01</p>
            <h3>Our Tech</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda inventore aperiam modi adipisci facere eligendi porro
              accusamus quod, perferendis doloribus.
            </p>
          </div>
          <div>
            <img src={women} alt="" />
            <p>02</p>
            <h3>Our Tech</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda inventore aperiam modi adipisci facere eligendi porro
              accusamus quod, perferendis doloribus.
            </p>
          </div>
          <div>
            <img src={city} alt="" />
            <p>03</p>
            <h3>Our Tech</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Assumenda inventore aperiam modi adipisci facere eligendi porro
              accusamus quod, perferendis doloribus.
            </p>
          </div>
        </div>
      </div>

      {/* secttion 4  */}
      <section className="section4">
        <h2>FAQS</h2>

        <div className="faqHw">
          <div>
            <h2>How it works</h2>
          </div>

          <div>
            {Faqs.map((faq, index) => {
              return (
                <div className="div2" key={faq.id}>
                  <div className="accord" onClick={() => handleClick(index)}>
                    <h3>{faq.title} </h3>
                    <button>
                      {hide === index ? (
                        <i className="fas fa-sort-up"></i>
                      ) : (
                        <i className="fas fa-sort-down"></i>
                      )}
                    </button>
                  </div>
                  <div>
                    <p className={hide === index ? "null" : "hide"}>
                      {faq.paragraph}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* section 5  */}

      <section className="section4">
        <div className="faqHw">
          <div>
            <h2>Driving saft</h2>
          </div>

          <div>
            {Driving.map((drive, ind) => {
              return (
                <div className="div2" key={drive.id}>
                  <div className="accord" onClick={() => handleClick2(ind)}>
                    <h3>{drive.title} </h3>
                    <button>
                      {hide2 === ind ? (
                        <i className="fas fa-sort-up"></i>
                      ) : (
                        <i className="fas fa-sort-down"></i>
                      )}
                    </button>
                  </div>
                  <div>
                    <p className={hide2 === ind ? "null" : "hide"}>
                      {drive.paragraph}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
