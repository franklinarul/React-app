import './Content.css'
import one from '../assets/images/brand-history.png'
function Content (){
    return(
        <>
        <div className='px-6'>
            <div className="grid grid-cols-2 gap-20 div">
              <div>
                <img class="img1 absolute z-10" src={one} alt="" />
                <div class="imgback relative left-7 top-7">

                </div>
              </div>
              <div>
                <h1>Leading Beer Brewery,
                Since 1974!</h1>
                <br></br>
                <p className='text-start'>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.<br></br>Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat.<br></br> Mauris blandit aliquet elit, eget tincidunt nibh.</p>
                <br></br>
                <p>Sed porttitor lectus nibh.Pellentesque in ipsum id orci porta dapibus.<br></br> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices <br></br>posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, <br></br>ullamcorper sit amet ligula. Proin eget tortor.</p>
              </div>
            </div>
            </div>
            <div className='px-24'>
                 <div className='grid grid-cols-4 gap-5'>
                  <div className='justify-center text-center'>
                    <h1 className='text-4xl border-b-2 pb-7'>1974</h1>
                    <br></br>
                    <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
                  </div>
                  <div className='justify-center text-center'>
                    <h1 className='text-4xl border-b-2 pb-7'>1974</h1>
                  
                    
                    <br></br>
                    <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
                  </div>
                  <div className='justify-center text-center'>
                    <h1 className='text-4xl border-b-2 pb-7'>1974</h1>
                   
                   
                    <br></br>
                    <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
                  </div>
                  <div className='justify-center text-center'>
                    <h1 className='text-4xl border-b-2 pb-7'>1974</h1>
                    
                    <br></br>
                    <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim.</p>
                  </div>
                </div>
                
            </div>
        </>
    )
}
export default Content