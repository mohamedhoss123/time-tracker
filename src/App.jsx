import React,{ useState } from "react";
import reactLogo from "./assets/react.svg";
import { Button,Container,Modal ,Text, Input } from '@nextui-org/react';
// import "./App.css";

function App() {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };


  return (
    <div className="App">
      <Container>
        <Button onPress={handler} onClick={() => window.electronAPI.ping()}>Test</Button>
        <Modal
          aria-labelledby="modal-title"
          open={visible}
          preventClose
          onClose={closeHandler}
        >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Enter your username
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="username"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button css={{
            width: "100%",
          }} onPress={closeHandler}>
            Done
          </Button>
        </Modal.Footer>
      </Modal>
      </Container>
    </div>
  );
}

export default App;
