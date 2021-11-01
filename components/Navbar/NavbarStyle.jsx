import styled from "styled-components";  

export const Li = styled.li`
    text-decoration: none;
    display: inline-block;

    padding: 1em 3em; 
    color: white;



    transition: all ease-in-out 300ms;

    &:hover {    
        font-color: red;
        outline: 3px solid white; 
        outline-offset: -5px; 
    }
`; 