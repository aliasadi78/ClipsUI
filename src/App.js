import React, {useContext} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Routes,
    Route,
    Link
} from "react-router-dom";
import './App.css';
import SignIn from "./Components/User/SignIn/SignIn";
import SignUp from "./Components/User/SignUp/SignUp";
import Dashboard from "./Components/Dashborad/Dashboard";
import Create from "./Components/Create/Create";
import Code from "./Components/Code/Code";
import resultContext from "./resultContext";

function App() {
    let result = []

    return (
        <div>
            <Router>
                <resultContext.Provider value={result}>
                    <Routes>
                        <Route path="/" index element={<Dashboard/>}/>
                        {/*<Route path="SignIn/" element={<SignIn/>}/>*/}
                        {/*<Route path="SignUp/" element={<SignUp/>}/>*/}
                        <Route path="Dashboard/" element={<Dashboard/>}/>
                        <Route path="Create/" element={<Create/>}/>
                        <Route path="Code/" element={<Code/>}/>
                    </Routes>
                </resultContext.Provider>
            </Router>
        </div>
    )
}

//
// export default function App() {
//     return (
//         <Router>
//             <div>
//                 <nav>
//                     <ul>
//                         <li>
//                             <Link to="/">Home</Link>
//                         </li>
//                         <li>
//                             <Link to="/about">About</Link>
//                         </li>
//                         <li>
//                             <Link to="/users">Users</Link>
//                         </li>
//                     </ul>
//                 </nav>
//
//                 {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//                 <Switch>
//                     <Route path="/about">
//                         <About />
//                     </Route>
//                     <Route path="/users">
//                         <Users />
//                     </Route>
//                     <Route path="/">
//                         <Home />
//                     </Route>
//                 </Switch>
//             </div>
//         </Router>
//     );
// }
//
// function Home() {
//     return <h2>Home</h2>;
// }
//
// function About() {
//     return <h2>About</h2>;
// }
//
// function Users() {
//     return <h2>Users</h2>;
// }


export default App;