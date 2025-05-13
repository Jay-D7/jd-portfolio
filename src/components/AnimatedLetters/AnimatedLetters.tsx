import './AnimatedLetters.scss';

//Define the props interface
interface AnimatedLettersProps {
  letterClass: string; // CSS class name
  strArray: string[]; // Array of characters to animate
  idx: number; // Index offset for unique class names
}

export const AnimatedLetters = ({
  letterClass,
  strArray,
  idx,
}: AnimatedLettersProps) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span
          key={char + i}
          className={`${letterClass} _${i + idx}`}
          style={{ animationDelay: `${(i + idx) / 10}s` }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};
