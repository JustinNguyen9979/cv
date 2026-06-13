import { useEffect, useState } from 'react';

export default function AnimatedText({ phrases }) {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const speed = isDeleting ? 35 : 70;
    const delay = !isDeleting && letterIndex === currentPhrase.length ? 1200 : speed;

    const timer = setTimeout(() => {
      if (!isDeleting && letterIndex < currentPhrase.length) {
        setLetterIndex((current) => current + 1);
        return;
      }

      if (!isDeleting && letterIndex === currentPhrase.length) {
        setIsDeleting(true);
        return;
      }

      if (isDeleting && letterIndex > 0) {
        setLetterIndex((current) => current - 1);
        return;
      }

      setIsDeleting(false);
      setPhraseIndex((current) => (current + 1) % phrases.length);
    }, delay);

    return () => clearTimeout(timer);
  }, [phraseIndex, letterIndex, isDeleting, phrases]);

  return (
    <span className="animated-text" aria-label={phrases[phraseIndex]}>
      {phrases[phraseIndex].slice(0, letterIndex)}
      <span className="cursor">|</span>
    </span>
  );
}
