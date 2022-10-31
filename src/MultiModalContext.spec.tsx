import { Button } from '@chakra-ui/button';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { useMultiModal } from './MultiModalContext';
import { CustomMultiModal, SimpleMultiModal } from './utils';

test('should switch to the next section when next() called', async () => {
  render(<CustomMultiModal />);

  await userEvent.click(screen.getByRole('button', { name: 'Open modal' }));
  await userEvent.click(screen.getByRole('button', { name: 'Continue' }));

  expect(screen.getByRole('heading', { name: 'Step 2' })).toBeInTheDocument();
});

test('should switch to the previous section when previous() called', async () => {
  render(<CustomMultiModal />);

  await userEvent.click(screen.getByRole('button', { name: 'Open modal' }));
  await userEvent.click(screen.getByRole('button', { name: 'Continue' }));
  await userEvent.click(screen.getByRole('button', { name: 'Back' }));

  expect(screen.getByRole('heading', { name: 'Step 1' })).toBeInTheDocument();
});

test('should reset sections when reset() called', async () => {
  render(<CustomMultiModal />);

  await userEvent.click(screen.getByRole('button', { name: 'Open modal' }));
  await userEvent.click(screen.getByRole('button', { name: 'Continue' }));
  await userEvent.click(screen.getByRole('button', { name: 'Continue' }));
  await userEvent.click(screen.getByRole('button', { name: 'Reset' }));

  expect(screen.getByRole('heading', { name: 'Step 1' })).toBeInTheDocument();
});

test('should close modal when close() called', async () => {
  render(<CustomMultiModal />);

  await userEvent.click(screen.getByRole('button', { name: 'Open modal' }));
  await userEvent.click(screen.getByRole('button', { name: 'Continue' }));
  await userEvent.click(screen.getByRole('button', { name: 'Continue' }));
  await userEvent.click(screen.getByLabelText('Close'));
  const modal = screen.queryByText('Modal without footer');
  await waitForElementToBeRemoved(modal);

  expect(modal).not.toBeInTheDocument();
});

test('should reset sections when close() called', async () => {
  render(<CustomMultiModal />);

  await userEvent.click(screen.getByRole('button', { name: 'Open modal' }));
  const continueButton = screen.getByRole('button', { name: 'Continue' });
  await userEvent.click(continueButton);
  await userEvent.click(continueButton);
  await userEvent.click(screen.getByLabelText('Close'));
  const modal = screen.queryByText('Modal without footer');
  await waitForElementToBeRemoved(modal);
  await userEvent.click(screen.getByRole('button', { name: 'Open modal' }));

  expect(screen.getByRole('heading', { name: 'Step 1' })).toBeInTheDocument();
});

test('should show only "Next" button when isFirstSection', async () => {
  render(<SimpleMultiModal />);

  await userEvent.click(screen.getByRole('button', { name: 'Open modal' }));

  expect(
    screen.queryByRole('button', { name: 'Previous' }),
  ).not.toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Next' })).toBeInTheDocument();
});

test('should show "Close" button instead "Next" when isLastSection', async () => {
  render(<SimpleMultiModal />);

  await userEvent.click(screen.getByRole('button', { name: 'Open modal' }));
  await userEvent.click(screen.getByRole('button', { name: 'Next' }));

  expect(
    screen.queryByRole('button', { name: 'Next' }),
  ).not.toBeInTheDocument();
  expect(screen.getByLabelText('Close')).toBeInTheDocument();
});

test('should throw error when useMultiModal called outside the Context', async () => {
  const SimpleComponent = () => {
    const { next } = useMultiModal();

    return <Button onClick={next}>Next</Button>;
  };

  expect(() => render(<SimpleComponent />)).toThrow(
    'MultiModalContext must be within MultiModalProvider',
  );
});
