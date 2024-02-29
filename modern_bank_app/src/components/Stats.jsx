import { stats } from "../constants";
import styles from "../style";
import {motion, px} from "framer-motion"
const Stats = () => (

  
  <section >
  <div className="waveContainer  flex flex-col">
      <div className="wave wave1"></div>
      <div className="wave wave2"></div>
      <div className="wave wave3"></div>
      <div className="wave wave4"></div>
      
  </div>
  <motion.div 
  className={`${styles.flexCenter} bg-black-gradient-2 flex-row flex-wrap sm:mb-20 mb-6`}
  initial="hidden"
  whileInView="visible"
 
  variants={{
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { staggerChildren: 0.5 } }
  }}
>
  {stats.map((stat, index) => (
    <motion.div 
      key={stat.id} 
      className={`flex-1 flex justify-start items-center flex-row m-3`} 
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
      }}
    >
      <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
        {stat.value}
      </h4>
      <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
        {stat.title}
      </p>
    </motion.div>
  ))}
</motion.div>
  </section>
  
);

export default Stats;