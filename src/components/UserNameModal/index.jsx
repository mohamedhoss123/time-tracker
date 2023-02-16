import React,{ useState,uesEffect, useRef } from "react";
import { Button,Modal ,Text, Input } from '@nextui-org/react';


const UserNameModal = ({ show , onEnter }) => {

  const userNameInput = useRef(null)

  const userName = userNameInput.current.value



  // uesEffect(() => {
  //   window.electronAPI.saveUserName
  // },[])


  return (
    <Modal
      aria-labelledby="modal-title"
      open={show}
      preventClose
      onClose={onEnter}
    >
      <Modal.Header>
        <Text id="modal-title" size={18}>
          Enter your username
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Input
          ref={userNameInput}
          clearable
          bordered
          fullWidth
          color="primary"
          size="lg"
          placeholder="username"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button
          css={{
            width: "100%",
          }}
          onPress={onEnter}
        >
          Done
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserNameModal;
