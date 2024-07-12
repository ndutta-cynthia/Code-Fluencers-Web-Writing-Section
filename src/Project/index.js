import './index.css';
import score from "./DeWatermark.ai_1720757758177.png";
import { useState } from 'react';


function Project(){
   const [showModal,setShowModal]=useState(false)
  
   return(
   <div className="articles-container">
       <div className='modal' style={{display:showModal ? 'block':'none'}}>
           <div className='modal-content'>
        
       <div className='cardsContainer'>


          
      
       <div className="cardsText" id='delivery-card'>
           <h1 className="h1Tag">Credit Scoring Made Easy</h1>
           <p>
           Each character in the book must confront both personal and societal ideas regarding
            their identity and how their community views them. Traditional ideas about a woman’s
             place in South African society and in her family predated apartheid, but apartheid exacerbated
             these circumstances by enforcing racial segregation. Because their options for residing and
             working were restricted, all Black people suffered a loss of opportunity that persisted even
             after apartheid ended. Most men were too poor or uneducated to leave their villages or townships
             in search of better work. Whether their men provided or not, women bore the brunt of raising a
             family and running a household on limited money. Racial segregation ensured that everyone lacked
             perspective on how people other than themselves lived.
            Trevor grows up in a world of strong women whom society views as less than their male counterparts.
            Even though Patricia has a career and a home of her own, she is still identified as Abel’s wife.
             Abel’s traditional family expects her to defer to him in all things, and while Patricia rejects
             outward displays of respect, she does support Abel financially even as his business fails.




           </p>
       </div>




     <div className='article-cards'>


       <div>
           <h1 className="h1Tag">About</h1>
           <p>
           Dairy farmers in Rwanda prefer digital lenders to loan officers because of fairness in loan disbursement.
            These lenders use issues like a lot of information they deem unnecessary 
            to determine their credibility. Also, these operators did not explain
             rejected loans which the farmers felt that they had at least the right
              to explain, from the primary research we conducted 6 out of 10 farmers 
              stated that they have to wait for a long time to get their loans approved and when 
              the loans are rejected they stated that they do not get feedback on why the loan was 
              rejected whereby a farmer stated “It would be great if we knew why the loan was rejected
               because that would help improve on what I was missing so that next time  I ask for the loan
                I come with all the requirements”

           </p>
       </div>
       <div>
       <h1 className="h1Tag">User Vlue Proposation</h1>
           <p>
           Inota Credit scoring system will offer numerous advantages, particularly in enhancing efficiency and accuracy in
           financial decision-making processes. One of the primary benefits is speed, allowing lenders to evaluate
           thousands of applications swiftly and impartially, resulting in quicker decisions on 
           credit card limit extensions. This rapid processing minimizes the risk of human error and ensures that
           financial statements, credit ratings, and account statuses are assessed accurately and promptly. Moreover,
           credit scores enable consumers to access personal loans and assist financial institutions in managing risk 
           and allocating resources effectively. Consumers benefit from improved credit scores, which not only grant 
           them access to necessary credit but also incentivize responsible financial management. Overall, credit 
           scoring systems contribute significantly to operational efficiency, reduced costs, and enhanced financial 
           health for both consumers and businesses.
           </p>
       </div>
       </div>
       </div>
       </div>
       </div>
       <div className='BookArticle'>  
         <div className='inota-plus'>
         
           <div className='blog'>
           <h1 className='blog-heading'>Inota Plus Credit Scoring System</h1>
          <p className="book-intro">
          Our solution is to come up with a credit scoring system that offers alternative collateral for Saccos. We will collect
           data from the farmers like their regular milk collections, savings, regular utility bills, 
           and other sources of income, and for loss mitigation, consider assets like land, farm machinery,
            and livestock. This information will be used to give them a credit score, and a range of the amount they are credible for.
             The institution will disburse the loan and update the system on the amount given and the 
             repayment duration. We will then track the repayment status of the loan. This information will be used to
              update their credit score for the next time they apply for a loan.

           </p>


           <button className='read-more' onClick={()=> setShowModal(true)}>
           Read More</button>
          </div>
          <div >
         <img src={score} alt="Inota-Plus" />
         </div>


         </div>
        </div>   
   </div>
   )
}
export default Project;