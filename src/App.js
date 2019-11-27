import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Profile from "./Components/Profile";

function App() {
  return (
    <div className="App">
        <Navbar />
        <Profile
            name="Eric Mendoza"
            subtitle="Ingeniero en Ciencias de Computación y Tecnologías de la Información"
        />
        <Section
            title="HTML Only"
            subtitle="El presente proyecto es una simple historia contada a través de las maravillosas opciones que HTML
            ofrece. Es decir, no esperes ver algo visualmente hermoso, espera ver algo perfectamente funcional. Este
            proyecto fue realizado con el propósito de familiarizarce con el concepto de web semántica."
            dark={false}
            id="section1"
            link='http://msdeus.site/15002/laboratorio3/index.html'
            logo='https://www.w3.org/html/logo/downloads/HTML5_Logo_256.png'
        />
        <Section
            title="CSS Only"
            subtitle="Este proyecto es una tiene como objetivo crear algo visualmente hermoso utilizando únicamente todas
            las herramientas que esta bella herramienta nos ofrece."
            dark={false}
            id="section2"
            link='http://msdeus.site/15002/laboratorio4/index.html '
            logo='http://www.myiconfinder.com/uploads/iconsets/256-256-8b61de4c84033266e15317a6eb9fda2d-css3.png'
        />

        <Section
            title="JS Only"
            subtitle="Este proyecto, aunque no es tan hermoso, permite a los clientes tener la oportunidad de
            comunicarse instantaneamente con sus compañeros de clase del curso de Web. El objetivo en este caso era aprender
            a modificar el dom y a utilizar los conceptos básicos de Javascript."
            dark={false}
            id="section3"
            link='http://msdeus.site/15002/laboratorio5/index.html'
            logo='https://cdn.iconscout.com/icon/free/png-256/javascript-20-555998.png'
        />

        <Section
            title="React"
            subtitle="El mundo se vuelve más bonito cuando combinamos todas las herramientas anteriores en una sola
            hermosa herramienta que nos permite utilizarla de manera sencilla y versátil. Este proyecto es una introducción
            a React y tenía como objetivo aprender a desarrollar páginas web con componentes."
            dark={false}
            id="section4"
            link='http://msdeus.site/15002/laboratorio6/index.html'
            logo='https://cdn.iconscout.com/icon/free/png-256/react-native-1-555609.png'
        />

        <Section
            title="Netflix"
            subtitle="Les presento a la futura competencia de Netflix, es Netflix pero chafa. Esa hermosa página web combina todos
            los conocimientos aprendidos hasta la mitad del curso de programación web."
            dark={false}
            id="section5"
            link='http://msdeus.site/15002/proyecto1/build/index.html'
            logo='https://cdn.iconscout.com/icon/free/png-256/netflix-1693559-1442600.png'
        />

          <Section
              title="Linting"
              subtitle="Nadie la quiere, pero todos la necesitamos. Linting es como la suegra, la queremos...
              pero muy lejos. No hace daño a nadie darse una vuelta por las librerías de linting para sufrir un poco."
              dark={false}
              id="section6"
              link='https://github.com/eric-mendoza/glitch-uvg-web-2019'
              logo='https://cdn.iconscout.com/icon/free/png-256/airbnb-1-282216.png'
          />

          <Section
              title="Calculadora"
              subtitle="Este bello proyecto les hará tener un viaje a través del hermoso mundo de las pruebas unitarias.
              Un buen programador siempre prueba, prueba, prueba, prueba, prueba, prueba, prueba, prueba...     "
              dark={false}
              id="section7"
              link='http://msdeus.site/15002/laboratorio8/build/index.html'
              logo='https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Mocha_%28JavaScript_framework%29_%28logo%29.svg/256px-Mocha_%28JavaScript_framework%29_%28logo%29.svg.png'
          />

          <Section
              title="Storybook"
              subtitle="Storybook es la prima guapa de todas las herramientas para realizar pruebas. Ella permite realizar pruebas de forma gráfica y
              luego crear una página muy sencilla para probarlas. Se las presento."
              dark={false}
              id="section8"
              link='http://msdeus.site/15002/laboratorio9/storybook-static/index.html'
              logo='https://spectrum.imgix.net/communities/ac7a985f-87cc-4f34-9915-d451b68cdf78/21793114-37de-47c7-8464-65d1839af692-storybook-social-media-profile.png?w=256&h=256&dpr=2&auto=compress&expires=1555286400000&ixlib=js-1.2.1&s=9ec04e79ffccebaf46858a50b22146ba'
          />
    </div>
  );
}

export default App;
