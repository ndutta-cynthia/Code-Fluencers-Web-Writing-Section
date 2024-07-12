

import Navbar from './Homepage';
import VideoSection from './VideoSection';
import './App.css';
import Podcast from "./Podcast";
import WritingSection from "./writingSection"
import Project from './Project';
import Portfolio from './Portfolio'



function App() {
  return (
    <div>
    <Navbar/> 
    <VideoSection/>
    <Podcast/>
    <WritingSection/>
    <Project/>
     <Portfolio/>
    </div>
  );
}
export default App;
