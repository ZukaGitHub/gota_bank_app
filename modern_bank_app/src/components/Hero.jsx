
import styles from '../style';
import { discount , robot,herobanner} from '../assets';
import GetStarted from './GetStarted';


const Hero = () =>  (
    <section id="home" className={`flex md:flex-row flex-col`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt="discount" className='w-[32px] -[32px]'/>
          <p className={`${styles.paragraph} ml-2`}>  
          <span className="text-white">20%
          </span>  Discount For {" "}        
          <span className="text-white"> 1 Month
          </span> Account </p>
        
        </div>
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]'>
            <div className="inline-block">
            <span className="applyTypewriterAnimation">The Next</span>
            </div> <br className='sm:block hidden '></br> {" "}
            <div className="inline-block">
            <span className='text-gradient applyTypewriterAnimation'>Generation</span> {" "}      
            </div>  
           <div className="inline-block">
           <p className='applyTypewriterAnimation font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px]' > Payment Method</p>
           </div>
           <p className={`${styles.paragraph} max-w-[470px] mt-5 applyParagraphAnimation` }>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, ex eum delectus quisquam ratione, repellendus est numquam architecto quae suscipit explicabo aliquid, consectetur fuga in voluptates amet accusantium tempora. Vitae?</p>

          </h1>
          <div className='ss:flex hidden md:mr-4 mr-0 transition ease-in-out  hover:scale-125'>
            <GetStarted/>

          </div>
          
          <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img className="w-[100%] h-[100%] relative z-[5]"src={herobanner}></img>  
        <div className='blob blob1'></div>
        <div className='blob blob2'></div>
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
       </div>
        </div>
       

      </div>

    </section>
  )


export default Hero