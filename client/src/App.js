import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import People from "./components/People";
import Settings from "./components/Settings";

function App() {
    return (
        <div className="App">
            <Navigation />
            <Routes>
                <Route path="/" element={<People />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </div>
    );
}

export default App;
