import styles from "./style.js"
import {
  Navbar,
  Billing,
  CardDeal,
  Business,
  Clients,
  CTA,
  Stats,
  Footer,
  Testimonials,
  Hero
} from "./components";
import FeedbackCard from "./components/FeedbackCard.jsx";


const App = () =>
(
 
  <div className="bg-primary w-full overflow-hidden parentDiv">
 
    <div className="w-full h-full z-[10] absolute overflow-hidden applyIntroAnimationContainer">
      <div className="bg-black w-[20%] h-[100vh] z-[10] inline-block relative introColumn">

      </div>
      <div className="bg-primary w-[20%] h-[100vh] z-[10] inline-block relative  introColumn">

      </div>
      <div className="bg-primary w-[20%] h-[100vh] z-[10] inline-block relative introColumn">

      </div>
      <div className="bg-primary w-[20%] h-[100vh] z-[10] inline-block relative introColumn">

      </div>
      <div className="bg-primary w-[20%] h-[100vh] z-[10] inline-block relative  introColumn">

      </div>
    </div>
    <div className="slide">
    <div className={'${styles.paddingX} ${styles.flexCenter}'}>
        <div className={'${styles.boxWidth}'}>
          <Navbar />
         
        </div>
      </div>
      <div className={'bg-primary ${styles.flexStart}'}>
        <div className={'${styles.boxWidth}'}>
          <Hero />
        
        </div>
      </div>
    </div>

    <div className="slide">
      <Stats></Stats>
      <Business></Business>
    </div>
    <div className="slide">
      <Billing></Billing>
    </div>
    <div className="slide">
    <CardDeal></CardDeal>
    </div>
    <div className="slide">
    <Testimonials></Testimonials>
    <Clients></Clients>
    </div>
    <div className="slide">
    <CTA></CTA>
    <Footer></Footer>
    </div>

    <div className={'bg-primary ${styles.paddingX} ${styles.flexStart}'}>
      <div className={'${styles.boxWidth}'}>
      </div>
    </div>
  </div>
)


export default App