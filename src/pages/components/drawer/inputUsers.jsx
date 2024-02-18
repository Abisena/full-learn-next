import {
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useDisclosure } from "@chakra-ui/react";

export default function InputDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Container>
        <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
          Tambah
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Input Pelanggan</DrawerHeader>

            <DrawerBody>
              <FormLabel>Nama Pelanggan</FormLabel>
              <Input placeholder="Nama..." />
              <FormLabel>Alamat</FormLabel>
              <Input placeholder="Alamat...." />
              <FormLabel>No Telpon</FormLabel>
              <Input placeholder="08....." />
              <FormLabel>Product</FormLabel>
              <Input placeholder="08....." />
              <FormLabel>Jumlah</FormLabel>
              <Input placeholder="08....." />
            </DrawerBody>

            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Kirim</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Container>
    </>
  );
}
