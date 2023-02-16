import React,{ useState,uesEffect, useRef} from "react";
import { Button,Container } from '@nextui-org/react';
import UserNameModal from "../components/UserNameModal";



  
const Viwe = () => {


  const [visible, setVisible] = useState(true) 

  return (
    <>
      <Container>
          <Button onPress={() => {
            window.electronAPI.ping()
            setVisible(true)
          }}>Test</Button>
          <UserNameModal show={visible} onEnter={(  ) => setVisible(false)} />
      </Container>
    </>
  )
}

export default Viwe 