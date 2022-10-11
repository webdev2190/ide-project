import React from "react";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";
//TypeScripy styling the Home Screen
import styled from "styled-components"; 

 //this is a typeScript css for Styling

const HomeScreenContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    height: 100vh; //vh:- statds for Viewport Height
    
   `  





//Create Functional Components
const HomeScreen = () =>{
 return(
    //ye jo HomeScree Container isko humne Div se replace kiya 
    //hai taki const ke under ka css means Typescript hai uska styling ker sake..
    <HomeScreenContainer>
        <LeftPane />
        <RightPane />
    </HomeScreenContainer>

 );
};
export default HomeScreen;