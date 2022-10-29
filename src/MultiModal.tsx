import { Modal, ModalProps } from '@chakra-ui/modal';
import { ReactElement } from 'react';

import { MultiModalProvider, useMultiModal } from './MultiModalContext';

export interface MultiModalProps extends ModalProps {
  sections: ReactElement[];
}

export function MultiModal({ sections, children, ...props }: MultiModalProps) {
  return (
    <MultiModalProvider sections={sections} onClose={props.onClose} isOpen={props.isOpen}>
      <MultiModalBase {...props}>{children}</MultiModalBase>
    </MultiModalProvider>
  );
}

function MultiModalBase({ children, ...props }: ModalProps) {
  const { close } = useMultiModal();

  return (
    <Modal {...props} onClose={close}>
      {children}
    </Modal>
  );
}
