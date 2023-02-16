import React, { useState, uesEffect, useRef } from "react";
import { Button, Container } from "@nextui-org/react";
import UserNameModal from "../components/UserNameModal";

const Viwe = () => {
  const [visible, setVisible] = useState(true);
  const [username, setSetUsername] = useState("");
  return (
    <>
      <Container>
        <Button
          onPress={() => {
            window.electronAPI.ping();
            setVisible(true);
          }}
        >
          Test
        </Button>
        <UserNameModal
          show={visible}
          onEnter={async () => {
            setVisible(false);
            await window.electronAPI.createNewProfile(username);
          }}
          setSetUsername={setSetUsername}
        />
      </Container>
    </>
  );
};

export default Viwe;
