import './hero.css'
import two from '../assets/images/hero-beer-bottles-3.png'
function Hero (){
    return(
        <>
        <div className='bg-yellow-400 h-lvh'>
         <div className="grid grid-cols-2 gap-32 hero">
            <div className='content'>
                <h1 className='text-2xl pb-6'>Biergut Premium Beer</h1>
                <h1 className='text-7xl line-height'>Introducing New Premium Flavors</h1>
                <p className='pt-10 pb-8'>
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                 <div className='flex gap-20'>
            <button>HOST A PARTY</button> 
            <button className='bg-white text-black'>RESTACK YOUR PUB</button> 
           </div>
            </div>
            <div>
                <img className='img'  src={two} alt="" />
            </div>
         </div>
           
        </div>
        </>
    )
}
export default Hero;