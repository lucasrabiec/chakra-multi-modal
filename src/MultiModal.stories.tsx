import {
  Box,
  Button,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import { Meta, Story } from '@storybook/react';

import { MultiModal, MultiModalProps } from './MultiModal';
import { MultiModalFooter } from './MultiModalFooter';
import { MultiModalSection } from './MultiModalSection';
import {
  CustomMultiModal,
  FirstSection,
  SecondSection,
  SimpleMultiModal,
} from './utils';

export default {
  title: 'MultiModal',
  component: MultiModal,
  parameters: {
    layout: 'centered',
  },
} as Meta<MultiModalProps>;

export const Default: Story<typeof MultiModal> = () => {
  return <SimpleMultiModal />;
};

export const WithCustomButtons: Story<typeof MultiModal> = () => {
  const modalProps = useDisclosure();

  return (
    <Box>
      <Button onClick={modalProps.onOpen}>Open modal</Button>
      <MultiModal
        sections={[<FirstSection />, <SecondSection />]}
        {...modalProps}
      >
        <ModalOverlay />
        <ModalContent h='350px'>
          <ModalHeader>Default modal with custom buttons</ModalHeader>
          <ModalCloseButton />
          <MultiModalSection />
          <MultiModalFooter
            justifyContent='space-between'
            previousButtonProps={{
              colorScheme: 'blue',
              variant: 'outline',
              size: 'sm',
            }}
            nextButtonProps={{ colorScheme: 'blue', size: 'sm' }}
          />
        </ModalContent>
      </MultiModal>
    </Box>
  );
};

export const WithoutFooter: Story<typeof MultiModal> = () => {
  return <CustomMultiModal />;
};
