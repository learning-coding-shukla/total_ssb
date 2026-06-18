// import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";

import Home from "./pages/Home";
import Army from "./pages/Army";
import Navy from "./pages/Navy";
import AirForce from "./pages/AirForce";
import NDA from "./pages/NDA";
import History from "./pages/History";
import Psychology from "./pages/Psychology";
import TAT from "./pages/TAT";
import PPDT from "./pages/PPDT";
// import SRT from "./pages/SRT";
import Lecturette from "./pages/Lecturette";
import Interview from "./pages/Interview";
import Knowledge from "./pages/Knowledge";
import Forces from "./pages/Forces";
import OIR from "./pages/OIR";
import Kargil from "./pages/Kargil";
import IMA from "./pages/IMA";
import INA from "./pages/INA";
import AFA from "./pages/AFA";
import OTA from "./pages/OTA";
import War1971 from "./pages/War1971";
import War1965 from "./pages/War1965";
import War1947 from "./pages/War1947";
import Operations from "./pages/Operations";
import Trident from "./pages/Trident";
import Python from "./pages/Python";
import Meghdoot from "./pages/Meghdoot";
import Cactus from "./pages/Cactus";
import Vijay from "./pages/Vijay";
import Sindoor from "./pages/Sindoor";
import ArmyCommands from "./pages/ArmyCommands";
import ParaSF from "./pages/ParaSF";
import PVC from "./pages/PVC";
import ArmyChiefs from "./pages/ArmyChiefs";
import ArmyRegiments from "./pages/ArmyRegiments";
import ArmyWeapons from "./pages/ArmyWeapons";
import NavyCommands from "./pages/NavyCommands";
import MARCOS from "./pages/MARCOS";
import ArmyHistory from "./pages/ArmyHistory";
import ArmyCorps from "./pages/ArmyCorps";
import ArmyQuiz from "./pages/ArmyQuiz";
import NavalFleets from "./pages/NavalFleets";
import AirForceCommands from "./pages/AirForceCommands";
import Aircraft from "./pages/Aircraft";
import Garud from "./pages/Garud";
import Footer from "./components/Footer";
import InterviewQuestions from "./pages/InterviewQuestions";
import GDTopics from "./pages/GDTopics";
import WATHome from "./pages/WATHome";
import WATInstructions from "./pages/WATInstructions";
import WATTest from "./pages/WATTest";
import WATResult from "./pages/WATResult";
import SRTHome from "./pages/SRTHome";
import SRTInstructions from "./pages/SRTInstructions";
import SRTPracticeMode from "./pages/SRTPracticeMode";
import SRTRealMode from "./pages/SRTRealMode";
import SRTResult from "./pages/SRTResult";
import TATHome from "./pages/TATHome";
import OLQs from "./pages/OLQs";
import PPDTInstructions from "./pages/PPDTInstructions";
import GPETest from "./pages/GPETest";
import GPEComplete from "./pages/GPEComplete";
import GPEHome from "./pages/GPEHome";
import GPEInstructions from "./pages/GPEInstructions";
import SelfDescription from "./pages/SelfDescription";
import ArmyRankStructure from "./pages/ArmyRankStructure";
import NavyRankStructure from "./pages/NavyRankStructure";
import AirForceRankStructure from "./pages/AirForceRankStructure";
import SelfIntroduction from "./pages/SelfIntroduction";
import PsychologyQuestions from "./pages/PsychologyQuestions";
import PIQ from "./pages/PIQ";
function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/piq" element={<PIQ />} />
        <Route path="/PsychologyQuestions" element={<PsychologyQuestions />} />
        <Route path="/SelfIntroduction" element={<SelfIntroduction />} />
        <Route path="/army/ranks" element={<ArmyRankStructure />} />

        <Route path="/navy/ranks" element={<NavyRankStructure />} />

        <Route path="/airforce/ranks" element={<AirForceRankStructure />} />
        <Route
          path="/psychology/self-description"
          element={<SelfDescription />}
        />
        <Route path="/gpe/test/:setId" element={<GPETest />} />
        <Route path="/gpe-complete/:setId" element={<GPEComplete />} />
        <Route path="/gpe" element={<GPEHome />} />

        <Route path="/gpe/instructions/:setId" element={<GPEInstructions />} />
        <Route path="/" element={<Home />} />
        <Route path="/oir" element={<OIR />} />
        <Route path="/army" element={<Army />} />
        <Route path="/nda" element={<NDA />} />
        <Route path="/ima" element={<IMA />} />
        <Route path="/ina" element={<INA />} />
        <Route path="/afa" element={<AFA />} />
        <Route path="/ota" element={<OTA />} />
        <Route path="/kargil" element={<Kargil />} />
        <Route path="/olqs" element={<OLQs />} />
        <Route path="/history" element={<History />} />
        <Route path="/war1971" element={<War1971 />} />
        <Route path="/war1965" element={<War1965 />} />
        <Route path="/war1947" element={<War1947 />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/psychology" element={<Psychology />} />
        <Route path="/tat" element={<TATHome />} />
        <Route path="/tat/test/:setId" element={<TAT />} />
        <Route path="/ppdt" element={<PPDTInstructions />} />

        <Route path="/ppdt-test" element={<PPDT />} />
        {/* <Route path="/srt" element={<SRT />} /> */}
        <Route path="/forces" element={<Forces />} />

        <Route path="/knowledge" element={<Knowledge />} />

        <Route path="/lecturette" element={<Lecturette />} />

        <Route path="/interview" element={<Interview />} />
        <Route path="/operations" element={<Operations />} />
        <Route path="/trident" element={<Trident />} />
        <Route path="/python" element={<Python />} />
        <Route path="/meghdoot" element={<Meghdoot />} />
        <Route path="/cactus" element={<Cactus />} />
        <Route path="/vijay" element={<Vijay />} />
        <Route path="/sindoor" element={<Sindoor />} />
        <Route path="/parasf" element={<ParaSF />} />
        <Route path="/army-commands" element={<ArmyCommands />} />
        <Route path="/pvc" element={<PVC />} />
        <Route path="/army-chiefs" element={<ArmyChiefs />} />
        <Route path="/army-regiments" element={<ArmyRegiments />} />
        <Route path="/army-weapons" element={<ArmyWeapons />} />
        <Route path="/army-history" element={<ArmyHistory />} />
        <Route path="/army-corps" element={<ArmyCorps />} />
        <Route path="/army-quiz" element={<ArmyQuiz />} />
        <Route path="/airforce" element={<AirForce />} />
        <Route path="/navy" element={<Navy />} />
        <Route path="/navy-commands" element={<NavyCommands />} />
        <Route path="/marcos" element={<MARCOS />} />
        <Route path="/naval-fleets" element={<NavalFleets />} />
        <Route path="/airforce-commands" element={<AirForceCommands />} />
        <Route path="/aircraft" element={<Aircraft />} />
        <Route path="/garud" element={<Garud />} />
        <Route path="/interview-questions" element={<InterviewQuestions />} />
        <Route path="/gd-topics" element={<GDTopics />} />
        <Route path="/wat" element={<WATHome />} />

        <Route path="/wat/instructions/:setId" element={<WATInstructions />} />

        <Route path="/wat/test/:setId" element={<WATTest />} />

        <Route path="/wat/result/:setId" element={<WATResult />} />
        <Route path="/srt" element={<SRTHome />} />

        <Route path="/srt/instructions/:setId" element={<SRTInstructions />} />

        <Route path="/srt/practice/:setId" element={<SRTPracticeMode />} />

        <Route path="/srt/real/:setId" element={<SRTRealMode />} />
        <Route path="/srt/result/:setId" element={<SRTResult />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
