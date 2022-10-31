import {
  createContext,
  PropsWithChildren,
  ReactElement,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface MultiModalContextType {
  currentSection: ReactElement;
  isFirstSection: boolean;
  isLastSection: boolean;
  next: () => void;
  previous: () => void;
  reset: () => void;
  close: () => void;
}

interface MultiModalProviderProps {
  sections: ReactElement[];
  isOpen: boolean;
  onClose: () => void;
}

export function MultiModalProvider({
  sections,
  children,
  onClose,
  isOpen,
}: PropsWithChildren<MultiModalProviderProps>) {
  const firstIndex = 0;
  const lastIndex = sections.length - 1;
  const [currentIndex, setCurrentIndex] = useState<number>(firstIndex);
  const [currentSection, setCurrentSection] = useState<ReactElement>(
    sections[firstIndex],
  );
  const [isFirstSection, setIsFirstSection] = useState<boolean>(true);
  const [isLastSection, setIsLastSection] = useState<boolean>(false);

  useEffect(() => {
    setCurrentSection(sections[currentIndex]);
    currentIndex === firstIndex
      ? setIsFirstSection(true)
      : setIsFirstSection(false);
    currentIndex === lastIndex
      ? setIsLastSection(true)
      : setIsLastSection(false);

    // Reset to first Section after ensuring the modal is not visible.
    // Making this change inside the 'close' function causes flickering when changing Sections.
    const timer = setTimeout(() => {
      if (!isOpen) {
        setCurrentIndex(0);
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [sections, currentIndex, lastIndex, isOpen]);

  const next = useCallback(
    () => setCurrentIndex((prevState) => Math.min(prevState + 1, lastIndex)),
    [lastIndex],
  );
  const previous = useCallback(
    () => setCurrentIndex((prevState) => Math.max(prevState - 1, firstIndex)),
    [],
  );
  const reset = useCallback(() => setCurrentIndex(0), []);
  const close = useCallback(() => onClose(), [onClose]);

  const memoizedValue = useMemo(
    () => ({
      currentSection,
      isFirstSection,
      isLastSection,
      next,
      previous,
      reset,
      close,
    }),
    [
      currentSection,
      isFirstSection,
      isLastSection,
      next,
      previous,
      reset,
      close,
    ],
  );

  return (
    <MultiModalContext.Provider value={memoizedValue}>
      {children}
    </MultiModalContext.Provider>
  );
}

export const MultiModalContext = createContext<MultiModalContextType>(
  {} as MultiModalContextType,
);

export function useMultiModal() {
  const context = useContext(MultiModalContext);
  if (!context || !Object.keys(context).length) {
    throw new Error('MultiModalContext must be within MultiModalProvider');
  }

  return context;
}
