import { ModalBody, ModalBodyProps } from '@chakra-ui/modal';

import { useMultiModal } from './MultiModalContext';

export type MultiModalSectionProps = Omit<ModalBodyProps, 'children'>;

export function MultiModalSection({ ...props }: MultiModalSectionProps) {
  const { currentSection } = useMultiModal();

  return <ModalBody {...props}>{currentSection}</ModalBody>;
}
