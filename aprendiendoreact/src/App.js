import logo from './assets/images/logo.svg';
import './assets/css/App.css';

import Header from './components/Header.js'
import Slider from './components/Slider.js'
import SideBar from './components/SideBar.js'
import Articles from './components/Articles.js'
import Footer from './components/Footer.js'

function App() {
  return (
    <html>
     <head>
       <meta charset="utf-8"/> 
       <title>Maquetacion del Master en Framework JS</title>
     </head>
     <body>
        <Header />
        <Slider />
        <div className="center">
           <section id="content">
             <h2 id="subheader">Últimos Artículos</h2>
             <Articles />

            </section>
           <SideBar />
           <div className="clearfix"></div>
        </div>
        <Footer />
     </body>
    </html>
  );
}

export default App;
