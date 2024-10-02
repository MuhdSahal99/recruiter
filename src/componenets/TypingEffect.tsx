import React, { useEffect, useState } from 'react';

interface TypingEffectProps {
  text: string;
  speed?: number;
  html?: boolean;
}

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 50, html = false }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  if (html) {
    return <div dangerouslySetInnerHTML={{ __html: displayedText }} />;
  }

  return <p>{displayedText}</p>;
};

export default TypingEffect;

// import React, { useEffect, useState } from 'react';

// interface TypingEffectProps {
//   text: string;
//   speed?: number;
//   onComplete?: () => void;  // Add onComplete prop
// }

// const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 50, onComplete }) => {
//   const [displayedText, setDisplayedText] = useState('');

//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       if (index < text.length) {
//         setDisplayedText((prev) => prev + text[index]);
//         index++;
//       } else {
//         clearInterval(interval);
//         if (onComplete) {
//           onComplete();  // Notify parent when typing is complete
//         }
//       }
//     }, speed);

//     return () => clearInterval(interval);
//   }, [text, speed, onComplete]);

//   return <p>{displayedText}</p>;
// };

// export default TypingEffect;
