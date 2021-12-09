import React from 'react';
import Flex_Components from "./Flex_Components"
import "./Head.css";

const Head = () => {
    return ( 
        <header>
            <p>Hello There</p>
            <h1>We Are Glint</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, aliquid! Quae dolore vero optio quasi, quisquam quas dicta delectus corrupti. Unde porro placeat, dolorem nihil aspernatur fugiat qui tempora laboriosam ipsum quaerat dolores odit dolore animi corrupti dicta necessitatibus excepturi sapiente! Esse suscipit earum dolores voluptates ipsum nam explicabo nesciunt. Animi ex cupiditate maiores esse quasi dicta, deleniti nostrum, asperiores officiis nesciunt excepturi expedita nemo eos tempore? Repudiandae maxime dolor fugit earum dolorum fuga dolorem vero commodi eum provident, iusto temporibus quae, cumque voluptatum! Voluptas dignissimos tempore veniam, minima repellendus consectetur omnis maxime atque eveniet quas nemo aliquam recusandae at?</p>
            <article class="flex-container">
                <Flex_Components/>
                <Flex_Components/>
                <Flex_Components/>
                <Flex_Components/>
            </article>
        </header>
    );
}

export default Head;