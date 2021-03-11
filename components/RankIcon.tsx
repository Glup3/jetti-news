import React from 'react';

interface RankIconProps {
  skillLevel: number;
}

function RankIcon({ skillLevel }: RankIconProps) {
  if (skillLevel < 2)
    return (
      <img
        className="mr-2"
        src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/5.png"
        alt="iron icon"
        width="25"
        height="25"
      />
    );

  if (skillLevel < 3)
    return (
      <img
        className="mr-2"
        src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/8.png"
        alt="bronze icon"
        width="25"
        height="25"
      />
    );

  if (skillLevel < 4)
    return (
      <img
        className="mr-2"
        src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/11.png"
        alt="silver icon"
        width="25"
        height="25"
      />
    );

  if (skillLevel < 5)
    return (
      <img
        className="mr-2"
        src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/14.png"
        alt="gold icon"
        width="25"
        height="25"
      />
    );

  if (skillLevel < 6)
    return (
      <img
        className="mr-2"
        src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/17.png"
        alt="platinum icon"
        width="25"
        height="25"
      />
    );

  if (skillLevel < 7)
    return (
      <img
        className="mr-2"
        src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/20.png"
        alt="diamond icon"
        width="25"
        height="25"
      />
    );

  if (skillLevel < 8)
    return (
      <img
        className="mr-2"
        src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/23.png"
        alt="diamond icon"
        width="25"
        height="25"
      />
    );

  return (
    <img
      className="mr-2"
      src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/24.png"
      alt="diamond icon"
      width="25"
      height="25"
    />
  );
}

export default RankIcon;
