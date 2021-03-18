import React from 'react';

interface AlinaQuoteTitleProps {
  lossesAgainst: number;
  gamesWith: number;
  lossesWith: number;
}

function AlinaQuoteBody({ lossesAgainst, gamesWith, lossesWith }: AlinaQuoteTitleProps) {
  const messages: string[] = [];

  if (gamesWith >= 8) {
    messages.push('Stay Strong! This poor soul had to play soooo many games with Alina...');
  }

  if (gamesWith >= 15) {
    messages.push('Holy Crouchdiff, may your soul rest in peace!');
  }

  if (lossesAgainst >= 5) {
    messages.push('This Garbage lost soo many games against Alina. Shame, shame, shame');
  }

  if (lossesWith >= 5) {
    messages.push('This is getting out of hand. Alina must be stopped!');
  }

  if (lossesWith >= 10) {
    messages.push('Unlucky to be you, getting griefed by Alina for centuries...');
  }

  if (messages.length == 0) {
    messages.push('What a truly lucky fellow. Alina did not grief you enough YET.');
  }

  return (
    <>
      {messages.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
    </>
  );
}

export default AlinaQuoteBody;
