import React from 'react';

interface AlinaQuoteTitleProps {
  lossesAgainst: number;
  gamesWith: number;
  lossesWith: number;
}

function AlinaQuoteTitle({ lossesAgainst, gamesWith, lossesWith }: AlinaQuoteTitleProps) {
  if (lossesAgainst >= 5) {
    return <h5 className="card-title">Garbage</h5>;
  }

  if (lossesWith >= 5) {
    return <h5 className="card-title">Truly Unlucky</h5>;
  }

  if (gamesWith >= 8) {
    return <h5 className="card-title">Poor Soul</h5>;
  }

  return <h5 className="card-title">Lucky You</h5>;
}

export default AlinaQuoteTitle;
