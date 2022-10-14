// import React from "react";
// import LeftPane from "./LeftPane";
// import RightPane from "./RightPane";
// //TypeScripy styling the Home Screen
// import styled from "styled-components"; 

//  //this is a typeScript css for Styling

// const HomeScreenContainer = styled.div`
//     display: grid;
//     grid-template-columns: 1fr 1.5fr;
//     height: 100vh; //vh:- statds for Viewport Height
    
//    `  

// //Create Functional Components
// const HomeScreen = () =>{
//  return(
//     //ye jo HomeScree Container isko humne Div se replace kiya 
//     //hai taki const ke under ka css means Typescript hai uska styling ker sake..
//     <HomeScreenContainer>
//         <LeftPane />
//         <RightPane />
//     </HomeScreenContainer>

//  );
// };
// export default HomeScreen;


import React, { useContext, useState } from "react";
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";
import styled from "styled-components";
import Modal from "../../Components/Modal";
import { ModalContext } from "../../Context/ModalContext";

const HomeScreenContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const HomeScreen = () => {
  const ModalFeatures = useContext(ModalContext)!;
  const isOpen = ModalFeatures.isOpen;

  return (
    <HomeScreenContainer>
      <LeftPane />
      <RightPane />
      {isOpen.value === true ? <Modal /> : <></>}
    </HomeScreenContainer>
  );
};

export default HomeScreen;