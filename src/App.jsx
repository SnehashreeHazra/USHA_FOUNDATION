import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import UshaAbout from "./view/About/UshaAbout";
import SignUp from "./view/Auth/SignUp/SignUp";
import Login from "./view/Auth/Login/Login";
import MarketPlace from "./view/marketPlace/MarketPlace";
import MarketPlace2 from "./view/MarketPlace2/MarketPlace2";
import SocialFeed from "./view/socialFeed/SocialFeed";
import Messaging from "./view/messagingSection/Messaging";
import BlogSection from "./view/BlogSection/BlogSection";
import Blog2 from "./view/Blog2/Blog2";
import PersonalProfile from "./view/PersonalProfile/PersonalProfile";
import VideoPreview from "./view/VideoPreview/VideoPreview";
import LandingPage from "./view/LandingPage/LandingPage";
import VedicKnowledge from "./view/VedicKnowledge/VedicKnowledge";
import VedicReels from "./view/VedicReels/VedicReels";
import UshaDialogue from "./view/UshaDialogue/UshaDialogue";
import UshaAcademy from "./view/UshaAcademy/UshaAcademy";
import VedicResearch from "./view/VedicResearch/VedicResearch";
import ResearchProject from "./view/ResearchProject/ResearchProject";
import UshaMission from "./view/AboutUshaMission/UshaMission";
import UshaDonation from "./view/UshaDonation/UshaDonation";
import UshaMembership from "./view/UshaMembership/UshaMembership";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<UshaAbout />} />
            <Route path="/usha-mission" element={<UshaMission />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/market-place" element={<MarketPlace />} />
            <Route path="/market-place2" element={<MarketPlace2 />} />
            <Route path="/usha-social" element={<SocialFeed />} />
            <Route path="/message" element={<Messaging />} />
            <Route path="/usha-insights" element={<BlogSection />} />
            <Route path="/reading-blog" element={<Blog2 />} />
            <Route path="/personal-profile" element={<PersonalProfile />} />
            <Route path="/video-preview" element={<VideoPreview />} />
            <Route path="/usha-stream" element={<VedicKnowledge />} />
            <Route path="/usha-sparks" element={<VedicReels />} />
            <Route path="/usha-dialogue" element={<UshaDialogue />} />
            <Route path="/usha-academy" element={<UshaAcademy />} />
            <Route path="/vedic-research" element={<VedicResearch />} />
            <Route path="/research-projects" element={<ResearchProject />} />
            <Route path="/usha-donate" element={<UshaDonation />} />
            <Route path="/usha-membership" element={<UshaMembership />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
