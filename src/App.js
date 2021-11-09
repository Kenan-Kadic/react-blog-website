import TopBar from "./components/topbar/TopBar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
    
    return (
        <Router>
            <TopBar/>
            <Routes>
                <Route exact path="homepage">
                    <Homepage />
                </Route>
                <Route path="/posts">
                    <Homepage />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/write">
                    <Write />
                </Route>
                <Route path="/settings">
                    <Settings />
                </Route>
                <Route path="/post/:postId">
                    <Single />
                </Route>
            </Routes>        
            </Router>
                   
    );
}

export default App;