
import './index.css';
import book from "./BornACrime.jpg";
import { useState } from 'react';


function Section(){
   const [showModal,setShowModal]=useState(false)
  
   return(
   <div className="articles-container">
       <div className='modal' style={{display:showModal ? 'block':'none'}}>
           <div className='modal-content'>
        
       <div className='cardsContainer'>


          
      
       <div className="cardsText" id='delivery-card'>
           <h1 className="h1Tag">Identity, Belonging, and Community</h1>
           <p>
           Identity, belonging, and community are interwoven concepts that deeply influence individual 
           and collective experiences. At its core, a community is defined by a group of people who share
           an identity-forming narrative, creating a sense of belonging and mutual understanding. This shared
           narrative transcends mere geographical proximity or shared interests, embodying a deeper connection
           that shapes individuals' identities and perceptions of right and wrong. Communities serve as the
           foundation for developing a shared sense of identity and belonging, influencing how members perceive
           themselves and their roles within society. They foster a sense of togetherness, pride, and sometimes
           hurt, depending on how the community is perceived internally and externally. Furthermore, communities
           possess a unique normative power, shaping our moral compasses and defining what it means to be a good
           neighbor, colleague, or member of a broader society. This intricate relationship between identity,
           belonging, and community underscores the importance of these concepts in forming our social fabric
           and guiding our interactions with the world around us
           </p>
       </div>




     <div className='article-cards'>


       <div>
           <h1 className="h1Tag">political</h1>
           <p>
           The concept of political belonging encompasses the intricate dynamics of identity, community,
           and citizenship within a societal framework. It highlights the significance of belonging as a
           multifaceted phenomenon, deeply intertwined with political structures and ideologies. Political
           belonging is not merely about membership in a community but also involves the recognition and
           negotiation of rights, responsibilities, and identities within the context of a nation-state.
           This aspect of belonging is inherently political, as it reflects the power dynamics that shape
           the boundaries of inclusion and exclusion within a society. The politics of belonging, therefore,
           becomes a battleground for contesting and challenging these boundaries, aiming to redefine what
           it means to be part of a community and to assert one's place within it. This struggle is central
           to discussions on citizenship, where the balance between individual rights and communal obligations
           is continuously debated. Understanding the politics of belonging is crucial for grasping the complexities
           of modern societies, where the quest for identity and acceptance intersects with the demands of political
           participation and citizenship
           </p>
       </div>
       <div>
       <h1 className="h1Tag">A Must Read</h1>
           <p>
           Born a Crime" by Trevor Noah is a highly recommended memoir that offers a unique and engaging perspective
           on growing up in South Africa during the apartheid era. The book stands out for its combination of humor,
           personal anecdotes, and insightful commentary on social issues, making it both entertaining and enlightening.
           Trevor Noah's narrative skillfully navigates the complexities of his mixed-race identity, providing readers
           with a firsthand account of the challenges and triumphs of living in a racially segregated society. His journey
           from a disadvantaged background to international success is inspiring, showcasing the power of resilience and
           determination. Additionally, "Born a Crime" serves as an educational resource, offering valuable insights into 
           South African history and culture. Whether you're interested in learning more about apartheid, appreciate good
           storytelling, or simply enjoy a well-crafted memoir, this book is a must-read.
           </p>
       </div>
       </div>
       </div>
       </div>
       </div>
       <div className='BookArticle'>  
         <div className='trevor-noah'>
         <div >
         <img src={book} alt="Born a Crime" />
         </div>
           <div className='blog'>
           <h1 className='blog-heading'>Book Review</h1>
          <p className="book-intro">
          Born a Crime: Stories from a South African Childhood," penned by Trevor Noah, is a captivating memoir that delves 
          into the author's unconventional upbringing amidst the complexities of apartheid-era South Africa. Born to a whit
           father and a black mother, Noah's existence was legally and socially fraught, labeled a "crime" under the apartheid
           regime. This memoir is not merely a recount of Noah's personal journey; it's a profound exploration of race, identity,
           and resilience set against the backdrop of a racially divided nation. Through his lens, we gain insights into the harsh
           realities of apartheid and its lasting impact, woven with personal anecdotes that highlight his struggle to navigate
           a world that sought to define him. Noah's narrative is punctuated with humor and a deep understanding of social issues,
           making "Born a Crime" a riveting read that educates as much as it entertains. His journey from a childhood marked by
           adversity to achieving international fame as the host of "The Daily Show" serves as both an inspiration and a testament 
           to the power of perseverance and self-discovery.
           </p>


           <button className='read-more' onClick={()=> setShowModal(true)}>
           Read More</button>
          </div>
         </div>
        </div>   
   </div>
   )
}
export default Section;








