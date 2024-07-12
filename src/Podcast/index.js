import './index.css'
const Podcast = ()=>{
    return(
        
        <div className='podcast'>
            <div className='main'>
                <div className='text' >
                <h1>Craft Curious</h1>
                <p>A podcast thet explores the world crafting from traditional   <br/>
                   techniques to modern innovations</p>
                <br/>
                <div className='topic'>
                <h3>Topic</h3>
                <p>Introduction</p>
                <p>Topic 2</p>
                <p>Topic 3</p>


                </div>
               
                </div>
                <div className='mic'>
                    <img src= "/image/Podcast.jpg" alt="mic" className='microphone'/>
                    <br/>
                    <br/>
                    <input type='placeholder' className='play'></input>
                    <br/>
                    <img src="/image/playbutton.png" alt="button" className='playbutton'/>
        

                </div>


            </div>
            
        </div>
        
        
        
    )

}
export default Podcast