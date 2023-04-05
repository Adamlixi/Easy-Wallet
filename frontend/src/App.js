import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/indexpage';
import HomePage2 from './pages/password_setting/password_setting';
import ToCreatePage from './pages/to_create/create_page';


import ToCreatePage1 from './pages/keepmapping/page.js';
import ToCreatePage2 from './pages/emailpage/emailpage.js';
import ToCreatePage3 from './pages/emailpage/Verification.js';
import firstpage from './pages/emailpage/firstpage.js';
import ToCreatePage4 from './pages/loginresult/fail.js';
import ToCreatePage5 from './pages/loginresult/succeed.js';
import ImportPage from './pages/import_address/importpage.js';
import RecoveryPage from './pages/Phrase/Recovery_Phrase.js';
import SeedPage from './pages/Phrase/myseedPhrase.js';


function App() {
  return (
      <Router>
        <div className="App">
          <main>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/password_setting" element={<HomePage2 />} />
                <Route path="/create" element={<ToCreatePage />} />
                <Route path="/mapping" element={<ToCreatePage1 />} />
                <Route path="/email" element={<ToCreatePage2 />} />
                <Route path="/Verification" element={<ToCreatePage3 />} />
                <Route path="/fail" element={<ToCreatePage4 />} />
                <Route path="/succeed" element={<ToCreatePage5 />} />
                <Route path="/ImportPage" element={<ImportPage />} />
                <Route path="/RecoveryPage" element={<RecoveryPage />} />
                <Route path="/SeedPage" element={<SeedPage />} />
                <Route path="/firstpage" element={<firstpage />} />


            </Routes>
          </main>
        </div>
      </Router>
  );
}

export default App;
