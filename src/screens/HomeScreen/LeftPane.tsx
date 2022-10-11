import React from "react";
import styled from "styled-components"; 

//Style this left pane using Typescript
const StyledLeftPane = styled.div`
    background: #221f20;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContentContainer = styled.div`
    text-align: center;
`;

const Logo = styled.img`
    width: 165px;
    margin-bottom: 1rem;
`;

const MainHeading = styled.h1`
    font-size: 2.4rem;
    font-weight: 400;
    color: white;
    margin-bottom: 0.75rem;

    // hum yaha pe span tage ke liye Css likhe 
    //ne wale hai to eska ek alga technic hai ki es H1 ke under 
    //jitne bhi span tag hoga unsabhi pe ye css apply hoga

span{
    //hum eske under span tag ka css likhengye..
    font-weight: 700;
}

`;

const SubHeading = styled.h2`
    font-size: 1.5rem;
    color:white;
    opacity:75%;
    margin-bottom: 1.5rem;
    font-weigth:400; 
`;

const AddNewButton = styled.a`
    padding: 0.25rem 1rem;
    border-radius: 2rem;
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
    text-decoration: none;

    span{
        font-weight: 900;
        font-size: 2rem;
    }

    &:hover{
        opacity: 0.9;
    }
`;

const LeftPane = () => {
    return(
        <StyledLeftPane>

        <ContentContainer>
            <Logo src="./logo.png" alt="logo" />
            <MainHeading>
                <span>Code</span> Deck
            </MainHeading>
            <SubHeading>Code. Conpile. Debug. </SubHeading>
            <AddNewButton href="">
                <span>+</span>Create New Playground 
            </AddNewButton>
        </ContentContainer>

        </StyledLeftPane>
    );
};

export default LeftPane;