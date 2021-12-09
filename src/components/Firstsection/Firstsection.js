import React from 'react';
import textComponent from "./Textcomponents"
import "./Firstsection.css";

const Firstsection = () => {
    return ( 
        <section>
            <h3>What We Do</h3>
            <h2>We've got everything you need to launch and grow your business</h2>
            <article class="section_grid">
                <textComponent/>
                <textComponent/>
                <textComponent/>
                <textComponent/>
            </article>
        </section>
    );
}

export default Firstsection;