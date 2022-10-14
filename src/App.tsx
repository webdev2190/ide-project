// import React from 'react';
// import HomeScreen from './screens/HomeScreen';
// // import LeftPane from './screens/HomeScreen/LeftPane';
// import GlobalStyles from "./styles/global";

// function App() {
//   return (
//     <div>
//       <GlobalStyles />
//       <HomeScreen />
//       </div>
//   );
// }

// export default App;


import React from "react";
import ModalProvider from "./Context/ModalContext";
import PlaygroundProvider from "./Context/PlaygroundContext";
import HomeScreen from "./screens/HomeScreen";
import GlobalStyles from "./styles/global";

function App() {
  return (
    <PlaygroundProvider>
      <ModalProvider>
        <GlobalStyles />
        <HomeScreen />
      </ModalProvider>
    </PlaygroundProvider>
  );
}

export default App;