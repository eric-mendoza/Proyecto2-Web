import React from 'react';
import './App.css';
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import Profile from "./Components/Profile";
import { Link, animateScroll as scroll } from "react-scroll";

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
        />
        <Section
            title="CSS Only"
            subtitle="Este proyecto es una tiene como objetivo crear algo visualmente hermoso utilizando únicamente todas
            las herramientas que esta bella herramienta nos ofrece."
            dark={false}
            id="section2"
        />

        <Section
            title="JS Only"
            subtitle="Este proyecto, aunque no es tan hermoso, permite a los clientes tener la oportunidad de
            comunicarse instantaneamente con sus compañeros de clase del curso de Web. El objetivo en este caso era aprender
            a modificar el dom y a utilizar los conceptos básicos de Javascript."
            dark={false}
            id="section3"
        />

        <Section
            title="React"
            subtitle="El mundo se vuelve más bonito cuando combinamos todas las herramientas anteriores en una sola
            hermosa herramienta que nos permite utilizarla de manera sencilla y versátil. Este proyecto es una introducción
            a React y tenía como objetivo aprender a desarrollar páginas web con componentes."
            dark={false}
            id="section4"
        />

        <Section
            title="Netflix"
            subtitle="El mundo se vuelve más bonito cuando combinamos todas las herramientas anteriores en una sola
            hermosa herramienta que nos permite utilizarla de manera sencilla y versátil. Este proyecto es una introducción
            a React y tenía como objetivo aprender a desarrollar páginas web con componentes."
            dark={false}
            id="section5"
        />
    </div>
  );
}

export default App;
