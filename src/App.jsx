import React,{ useState,uesEffect, useRef ,Suspense, lazy} from "react";
import { Loading } from '@nextui-org/react';

const View = lazy(() => import('./view'))

function App() {


  // uesEffect(() => {

  //   },[])


  return (
    <div className="App">
      <Suspense fallback={<Loading css={{
        display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }} size="lg"/> }>
          <View />
            
      </Suspense>
    </div>
  );
}

export default App;
