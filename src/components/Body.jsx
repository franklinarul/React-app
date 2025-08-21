import './Content.css'
function Content (){
    return(
        <>
        <div className="">
            <div className="grid grid-cols-2 div">
              <div>
                <img class="img1 absolute z-10" src="./src/images/brand-history.png" alt="" />
                <div class="imgback relative left-7 top-7">

                </div>
              </div>
              <div>
                <h1>Leading Beer Brewery,
                Since 1974!</h1>
                <p>Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Proin eget tortor risus. Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet elit, eget tincidunt nibh.</p>
                <p>Sed porttitor lectus nibh. Pellentesque in ipsum id orci porta dapibus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Proin eget tortor.</p>
              </div>
            </div>
            </div>
        </>
    )
}
export default Content