import FeedCard from "./components/FeedCard";
import RoomsCard from "./components/RoomsCard";
import SidebarCard from "./components/SidebarCard";
import "./index.css";

function App() {
  return (
    <div className="App">
      <SidebarCard />
      <RoomsCard />
      <FeedCard />
    </div>
  );
}

export default App;
