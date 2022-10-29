import {
  Box,
  Button,
  Flex,
  Heading,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Meta, Story } from '@storybook/react';

import { MultiModal, MultiModalProps } from './MultiModal';
import { useMultiModal } from './MultiModalContext';
import { MultiModalFooter } from './MultiModalFooter';
import { MultiModalSection } from './MultiModalSection';

export default {
  title: 'MultiModal',
  component: MultiModal,
  parameters: {
    layout: 'centered',
  },
} as Meta<MultiModalProps>;

export const Default: Story<typeof MultiModal> = () => {
  const modalProps = useDisclosure();

  return (
    <Box>
      <Button onClick={modalProps.onOpen}>Open modal</Button>
      <MultiModal sections={[<FirstSection />, <SecondSection />]} {...modalProps}>
        <ModalOverlay />
        <ModalContent h='350px'>
          <ModalHeader>Default modal</ModalHeader>
          <ModalCloseButton />
          <MultiModalSection />
          <MultiModalFooter />
        </ModalContent>
      </MultiModal>
    </Box>
  );
};

export const WithCustomButtons: Story<typeof MultiModal> = () => {
  const modalProps = useDisclosure();

  return (
    <Box>
      <Button onClick={modalProps.onOpen}>Open modal</Button>
      <MultiModal sections={[<FirstSection />, <SecondSection />]} {...modalProps}>
        <ModalOverlay />
        <ModalContent h='350px'>
          <ModalHeader>Default modal with custom buttons</ModalHeader>
          <ModalCloseButton />
          <MultiModalSection />
          <MultiModalFooter
            justifyContent='space-between'
            previousButtonProps={{ colorScheme: 'blue', variant: 'outline', size: 'sm' }}
            nextButtonProps={{ colorScheme: 'blue', size: 'sm' }}
          />
        </ModalContent>
      </MultiModal>
    </Box>
  );
};

export const WithoutFooter: Story<typeof MultiModal> = () => {
  const modalProps = useDisclosure();

  return (
    <Box>
      <Button onClick={modalProps.onOpen}>Open modal</Button>
      <MultiModal
        sections={[<SectionWithNext />, <SectionWithPreviousAndNext />, <SectionWithResetAndClose />]}
        {...modalProps}
      >
        <ModalOverlay />
        <ModalContent pb={6}>
          <ModalHeader>Modal without footer</ModalHeader>
          <ModalCloseButton />
          <MultiModalSection />
        </ModalContent>
      </MultiModal>
    </Box>
  );
};

function FirstSection() {
  return (
    <Box>
      <Heading size='md'>Step 1</Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nisi libero, euismod vehicula dui ultricies,
        volutpat porttitor quam. Duis accumsan tellus ac velit rutrum efficitur. Mauris eget pretium mauris.
      </Text>
    </Box>
  );
}

function SecondSection() {
  return (
    <Box>
      <Heading size='md'>Step 2</Heading>
      <Text>
        Nam suscipit ligula at leo feugiat, sed convallis mi iaculis. Nullam aliquam hendrerit lorem, at ultrices turpis
        egestas non. Aenean fringilla erat sed risus sollicitudin, id iaculis nulla interdum. Phasellus vel mi non lorem
        tincidunt scelerisque venenatis sit amet purus.
      </Text>
    </Box>
  );
}

function SectionWithNext() {
  const { next } = useMultiModal();

  return (
    <Flex flexDir='column' gap={5}>
      <FirstSection />
      <Button onClick={next} mx='auto' variant='solid' colorScheme={'green'}>
        Continue
      </Button>
    </Flex>
  );
}

function SectionWithPreviousAndNext() {
  const { previous, next } = useMultiModal();

  return (
    <Flex flexDir='column' gap={5}>
      <SecondSection />
      <Flex justify='center' gap={5}>
        <Button onClick={previous} variant='outline' colorScheme={'gray'}>
          Back
        </Button>
        <Button onClick={next} variant='solid' colorScheme={'green'}>
          Continue
        </Button>
      </Flex>
    </Flex>
  );
}

function SectionWithResetAndClose() {
  const { reset, close } = useMultiModal();

  return (
    <Flex flexDir='column' gap={5}>
      <Box>
        <Heading size='md'>Finished</Heading>
        <Text alignSelf='center'>Now you can close this modal or start again.</Text>
      </Box>
      <Flex justify='center' gap={5}>
        <Button onClick={reset} variant='solid' colorScheme={'orange'}>
          Reset
        </Button>
        <Button onClick={close} variant='solid' colorScheme={'red'}>
          Close
        </Button>
      </Flex>
    </Flex>
  );
}
