import { MultiModalSection, MultiModal, MultiModalFooter } from '@1mb/chakra-multi-modal';
import { ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/modal';
import { Text, Box, Button, useDisclosure, Flex } from '@chakra-ui/react';

function App() {
  const modalProps = useDisclosure();
  const sections = [<Section1 />, <Section2 />];

  return (
    <Flex justify='center' align='center' h='100vh'>
      <Button onClick={modalProps.onOpen}>Open Modal</Button>
      <MultiModal sections={sections} isCentered size='2xl' {...modalProps}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal</ModalHeader>
          <ModalCloseButton />
          <MultiModalSection />
          <MultiModalFooter />
        </ModalContent>
      </MultiModal>
    </Flex>
  );
}

function Section1() {
  return (
    <Box>
      <Text>Section 1</Text>
    </Box>
  );
}

function Section2() {
  return (
    <Box>
      <Text>Section 2</Text>
    </Box>
  );
}

export default App;
