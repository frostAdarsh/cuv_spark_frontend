import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className={styles.containerone}>
        <div className={styles.containertwo}>
          <div className={styles.onest}>
            <img src="Group.png" />
            SPARK<p className={styles.twost}>|Marketplace</p>
          </div>
          <div className={styles.btnone}>
            <div onClick={() => navigate("/signup")}>Sign up free</div>
          </div>
        </div>
        <div className={styles.containerthree}>
          <div className={styles.containerfour}>
            <div className={styles.fourone}>
              The easiest place to
              <br /> update and share your
              <br /> Connection
            </div>
            <div className={styles.fourtwo}>
              Help your followers discover everything you’re sharing
              <br /> all over the internet, in one simple place. They’ll thank
              <br /> you for it!
            </div>
            <div
              className={styles.fourthree}
              onClick={() => navigate("/signup")}
            >
              Get your free Spark
            </div>
          </div>
          <div className={styles.containerfive}>
            <img src="Analytics 1.png" className={styles.picone} />
          </div>
        </div>
        <div className={styles.threepart}>
          <div className={styles.threeone}>
            <img src="div.png" className={styles.picone} />
          </div>
          <div className={styles.threetwo}>
            <p className={styles.threetwoone}>
              Analyze your audience <br /> and keep your followers
              <br /> engaged
            </p>
            <p className={styles.threetwotwo}>
              Track your engagement over time, monitor revenue and learn
              <br /> what’s converting your audience. Make informed updates on
              the fly
              <br /> to keep them coming back.
            </p>
          </div>
        </div>
        <div className={styles.fourpart}>
          <div className={styles.fourpartone}>
            <p className={styles.fourpartoneone}>
              Share limitless content
              <br /> in limitless ways
            </p>
            <p className={styles.fourpartonetwo}>
              Connect your content in all its forms and help followers find more
              of
              <br /> what they’re looking for. Your TikToks, Tweets, YouTube
              videos, music
              <br />, articles, recipes, podcasts and more… It all comes
              together in one
              <br /> powerful place
            </p>
          </div>
          <div className={styles.fourparttwo}>
            <img src="div2.png" alt="" className={styles.pictwo} />
          </div>
        </div>
        <div className={styles.fivepart}>
          <div className={styles.fivepartone}>
            <p className={styles.fivepartoneone}>
              Here's what our <span className={styles.textcol}>customer</span>
              <br />
              has to says
            </p>
            <p className={styles.fivepartonetwo}>Read customer stories</p>
          </div>
          <div className={styles.fiveparttwo}>
            <div className={styles.fiveparttwoone}>
              <img src="icon.png" alt="" />
            </div>
            <div>
              <p className={styles.fiveparttwotwo}>
                [short description goes in here] lorem
                <br /> ipsum is a placeholder text to
                <br /> demonstrate.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.sixpart}>
          <div className={`${styles.sixpartbox} ${styles.sixpartbox1}`}>
            <div className={styles.sixpartti}>
              Amazing tool! Saved me months
            </div>
            <div className={styles.sixpartdes}>
              This is a placeholder for your testimonials and what your client
              has to
              <br /> say, put them here and make sure its 100% true and
              meaningful.
            </div>
            <div className={styles.sixpartpro}>
              <img src="ball.png" alt="" />
              <div>
                John Master,
                <br />
                <span className={styles.sixpartspan}>Director, Spark.com</span>
              </div>
            </div>
          </div>
          <div className={`${styles.sixpartbox} ${styles.sixpartbox2}`}>
            <div className={styles.sixpartti}>
              Amazing tool! Saved me months
            </div>
            <div className={styles.sixpartdes}>
              This is a placeholder for your testimonials and what your client
              has to
              <br /> say, put them here and make sure its 100% true and
              meaningful.
            </div>
            <div className={styles.sixpartpro}>
              <img src="ball.png" alt="" />
              <div>
                John Master,
                <br />
                <span className={styles.sixpartspan}>Director, Spark.com</span>
              </div>
            </div>
          </div>
          <div className={`${styles.sixpartbox} ${styles.sixpartbox2}`}>
            <div className={styles.sixpartti}>
              Amazing tool! Saved me months
            </div>
            <div className={styles.sixpartdes}>
              This is a placeholder for your testimonials and what your client
              has to
              <br /> say, put them here and make sure its 100% true and
              meaningful.
            </div>
            <div className={styles.sixpartpro}>
              <img src="ball.png" alt="" />
              <div>
                John Master,
                <br />
                <span className={styles.sixpartspan}>Director, Spark.com</span>
              </div>
            </div>
          </div>
          <div className={`${styles.sixpartbox} ${styles.sixpartbox1}`}>
            <div className={styles.sixpartti}>
              Amazing tool! Saved me months
            </div>
            <div className={styles.sixpartdes}>
              This is a placeholder for your testimonials and what your client
              has to
              <br /> say, put them here and make sure its 100% true and
              meaningful.
            </div>
            <div className={styles.sixpartpro}>
              <img src="ball.png" alt="" />
              <div>
                John Master,
                <br />
                <span className={styles.sixpartspan}>Director, Spark.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.sevenpart}>
          <div className={styles.sevenpartpare}>
            All Link Apps and Integrations
          </div>
          <div className={styles.sevenpartcon}>
            <div className={styles.sevenpartbox}>
              <img src="Auto Layout Horizontal.png" />
              <div className={styles.sevenpartti}>
                Audiomack
                <br />
                <span className={styles.sevenpartspan}>
                  {" "}
                  Add an Audiomack player to your
                  <br /> Linktree
                </span>
              </div>
            </div>
            <div className={styles.sevenpartbox}>
              <img src="Auto Layout Horizontal (1).png" />
              <div className={styles.sevenpartti}>
                Bandsintown
                <br />
                <span className={styles.sevenpartspan}>
                  {" "}
                  Drive ticket sales by listing your events
                </span>
              </div>
            </div>
            <div className={styles.sevenpartbox}>
              <img src="Auto Layout Horizontal (2).png" />
              <div className={styles.sevenpartti}>
                Bonfire
                <br />
                <span className={styles.sevenpartspan}>
                  {" "}
                  Display and sell your custom merch
                </span>
              </div>
            </div>
            <div className={styles.sevenpartbox}>
              <img src="Auto Layout Horizontal (3).png" />
              <div className={styles.sevenpartti}>
                Books
                <br />
                <span className={styles.sevenpartspan}>
                  {" "}
                  Promote books on your Linktree
                </span>
              </div>
            </div>
            <div className={styles.sevenpartbox}>
              <img src="Auto Layout Horizontal (4).png" />
              <div className={styles.sevenpartti}>
                Buy Me A Gift
                <br />
                <span className={styles.sevenpartspan}>
                  {" "}
                  Let visitors support you with a small gift
                </span>
              </div>
            </div>
            <div className={styles.sevenpartbox}>
              <img src="Auto Layout Horizontal (5).png" />
              <div className={styles.sevenpartti}>
                Cameo
                <br />
                <span className={styles.sevenpartspan}>
                  {" "}
                  Make impossible fan connections
                  <br /> possible
                </span>
              </div>
            </div>
            <div className={styles.sevenpartbox}>
              <img src="Frame.png" />
              <div className={styles.sevenpartti}>
                Clubhouse
                <br />
                <span className={styles.sevenpartspan}>
                  {" "}
                  Let your community in on the <br /> conversation
                </span>
              </div>
            </div>
            <div className={styles.sevenpartbox}>
              <img src="Frame (1).png" />
              <div className={styles.sevenpartti}>
                Community
                <br />
                <span className={styles.sevenpartspan}>
                  {" "}
                  Build an SMS subscriber list
                </span>
              </div>
            </div>
            <div className={styles.sevenpartbox}>
              <img src="Frame (2).png" />
              <div className={styles.sevenpartti}>
                Contact Details
                <br />
                <span className={styles.sevenpartspan}>
                  {" "}
                  Easily share downloadable
                  <br /> contact details
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.eightpart}>
          <div className={styles.eightpartone}>
            <div className={styles.eightpartone1}>
              <div
                className={styles.eightpartone11}
                onClick={() => navigate("/login")}
              >
                Log in
              </div>
              <div
                className={styles.eightpartone12}
                onClick={() => navigate("/signup")}
              >
                Sign up free
              </div>
            </div>
            <div className={styles.eightpartone2}>
              <div>About Spark</div>
              <div>Blog</div>
              <div>Press</div>
              <div>Social Good</div>
              <div>Contact</div>
            </div>
            <div className={styles.eightpartone3}>
              <div>Careers</div>
              <div>Getting Started</div>
              <div>Features and How-Tos</div>
              <div>FAQs</div>
              <div>Report a Violation</div>
            </div>
            <div className={styles.eightpartone4}>
              <div>Terms and Conditions</div>
              <div>Privacy Policy</div>
              <div>Cookie Notice</div>
              <div>Trust Center</div>
            </div>
          </div>
          <div className={styles.eightparttwo}>
            <div className={styles.eightparttwo1}>
              <div>
                We acknowledge the Traditional Custodians of the land on which
                our office stands, The Wurundjeri
                <br /> people of the Kulin Nation, and pay our respects to
                Elders past, present and emerging.
              </div>
            </div>
            <div className={styles.eightparttwo2}>
              <div className={styles.eightparttwo21}>
                <div>
                  <img src="t.png" />
                </div>
                <div>
                  <img src="i.png" />
                </div>
                <div>
                  <img src="y.png" />
                </div>
                <div>
                  <img src="ti.png" />
                </div>
                <div>
                  <img src="s.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
