import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import {motion, px} from "framer-motion"

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      <motion.h2  
      initial="1"
     whileInView="2"
     variants={{
      1: { opacity: 0, transform: "translateX(-100%)", filter: "blur(5px)" },
      2: { 
        opacity: 1, 
        transform: "translateX(0)", 
        filter: "blur(0)", 
        transition: { duration: 2 } 
      }
    }}
  className={styles.heading2}>
        What People are <br className="sm:block hidden" /> saying about us
      </motion.h2>
      <div className="w-full md:mt-0 mt-6">
        <motion.p  initial="3"
     whileInView="4"
   variants={{
     3: { opacity: 0, filter:"blur(5px)"},
     4: { opacity: 1,filter:"blur(0)",transition:{ duration: 2 }  }
  }} className={`${styles.paragraph} text-left max-w-[450px]`}>
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </motion.p>
      </div>
    </div>

    <motion.div  initial="hidden"
     whileInView="visible"
   variants={{
     hidden: { opacity: 0, transform:"translateX(-100%)"},
     visible: { opacity: 1, transform:"translateX(0)",transition: { staggerChildren: 0.1 } }
  }}
 
      className="flex flex-wrap justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card,index) => 
      <motion.div 
       key={index}
       variants={{
        hidden: { opacity: 0, transform:"translateX(-100%)"},
        visible: { opacity: 1, transform:"translateX(0)",transition: { staggerChildren: 0.1 } }
      }} 
      className="flex justify-between flex-col px-10 py-12 rounded-[20px]  relative max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card"><FeedbackCard key={card.id} {...card} /></motion.div>)}
    </motion.div>
  </section>
);

export default Testimonials;