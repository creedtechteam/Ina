

import React from "react";
import Footer from './Components/Footer'
import Header from './Components/Header'
import Pages from './Pages/Pages'

function App() {
  return (
    
      <Pages />
    <Header/>
     <main className="mt-10">
      <Pages/>
     </main>
     <Footer/>
    </>
  );
}

export default App;
