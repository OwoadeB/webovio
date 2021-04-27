import './main.css';
import img  from "../../assets/img/Oval.png";
import image from "../../assets/img/Image.png";

const Main  = () => {
  return (
    <main>
      <section className="wwd">
        <div className="u_75 u_center u_flex_sp">
          <div className="wwd_l">
            <p className="u_f14 u_mb_bg">what we do for you</p>
            <h2>Strategy. Design Content. Technology Development</h2>
            <span>
              There’s no secret sauce, no wizard behind the curtain. What makes 
              Aerolab tick is an interdisciplinary team with a framework that fosters candid collaboration.
            </span>
            <a href="/">More know About us</a>
          </div>
          <div className="wwd_r u_flex_col" >
            <p className="u_mb_bg">
              With More than 10 Years of Knowledge and Expertise we Design and Code Websites and Apps, 
              We Build Brands and Help Them Succeed
            </p>
            <div className="u_flex u_mr_s" >
              <img src={img} alt="alt" />
              <div className="u_flex_col u_jc">
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="projects">
        <div className="u_75 u_center projects__title">
          <h2>We Have Some Awesomr Project.</h2>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard dummy text ever since the 1500s
          </span>
        </div>
        <div className="projects__sample">
          <div className="projects__sample__img">
            <img src={image} alt="imagesd" />
          </div>
          <div className="projects__sample__text">
            <h2>The wall new<br /> Balenciaga.com</h2>
            <span>
              This article is floated online with an aim to help you find the best dvd printing solution.
              <br /> 
              <br /> 
              Dvd printing is an important feature used by large and small DVD production houses to print information on DVDs.
            </span>
            <a href="/">See Case Study</a>
          </div>
        </div>
      </section>
      <section className="deation">
        <div className="u_75 u_center">
          <h2 className="u_mb_bg">
            Deation & Evaluation - Best Way to <br/>Kick off Your Product Idea
          </h2>
          <div className="deation__services u_flex_sp ">
            <div>
              <p>Product Design Sprint</p>
              <span>A five-day workshop that will help you answer crucial business questions</span>
              <a href="/">Read more</a>
            </div>
            <div>
              <p>Product Design Sprint</p>
              <span>A five-day workshop that will help you answer crucial business questions</span>
              <a href="/">Read more</a>
            </div>
            <div>
              <p>Product Design Sprint</p>
              <span>A five-day workshop that will help you answer crucial business questions</span>
              <a href="/">Read more</a>
            </div>
            <div>
              <p>Product Design Sprint</p>
              <span>A five-day workshop that will help you answer crucial business questions</span>
              <a href="/">Read more</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Main