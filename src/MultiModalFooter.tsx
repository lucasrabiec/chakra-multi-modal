import { Button, ButtonProps } from '@chakra-ui/button';
import { ModalFooter, ModalFooterProps } from '@chakra-ui/modal';

import { useMultiModal } from './MultiModalContext';

export interface MultiModalFooterProps extends Omit<ModalFooterProps, 'children'> {
  nextButtonProps?: ButtonProps;
  previousButtonProps?: ButtonProps;
}

export function MultiModalFooter({ nextButtonProps, previousButtonProps, ...props }: MultiModalFooterProps) {
  const { previous, next, close, isFirstSection, isLastSection } = useMultiModal();

  const nextOrCloseTitle = isLastSection ? 'Close' : 'Next';
  const nextOrCloseHandleClick = isLastSection ? close : next;

  return (
    <ModalFooter gap={3} justifyContent='flex-end' {...props}>
      {!isFirstSection && (
        <Button w={100} variant='ghost' onClick={previous} {...previousButtonProps}>
          Previous
        </Button>
      )}
      <Button w={100} onClick={nextOrCloseHandleClick} {...nextButtonProps}>
        {nextOrCloseTitle}
      </Button>
    </ModalFooter>
  );
}
