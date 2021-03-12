import React from 'react';

interface RankIconProps {
  skillLevel: number;
  size?: number;
}

function RankIcon({ skillLevel, size = 25 }: RankIconProps) {
  if (skillLevel < 2)
    return (
      <img
        className="mr-2"
        src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/5.png"
        alt="iron icon"
        width={size}
        height={size}
      />
    );

  if (skillLevel < 3)
    return (
      <img
        className="mr-2"
        src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/8.png"
        alt="bronze icon"
        width={size}
        height={size}
      />
    );

  if (skillLevel < 4)
    return (
      <img
        className="mr-2"
        src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/11.png"
        alt="silver icon"
        width={size}
        height={size}
      />
    );

  if (skillLevel < 5)
    return (
      <img
        className="mr-2"
        src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/14.png"
        alt="gold icon"
        width={size}
        height={size}
      />
    );

  if (skillLevel < 6)
    return (
      <img
        className="mr-2"
        src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/17.png"
        alt="platinum icon"
        width={size}
        height={size}
      />
    );

  if (skillLevel < 7)
    return (
      <img
        className="mr-2"
        src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/20.png"
        alt="diamond icon"
        width={size}
        height={size}
      />
    );

  if (skillLevel < 8)
    return (
      <img
        className="mr-2"
        src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/23.png"
        alt="diamond icon"
        width={size}
        height={size}
      />
    );

  return (
    <img
      className="mr-2"
      src="https://trackercdn.com/cdn/tracker.gg/valorant/icons/tiers/24.png"
      alt="diamond icon"
      width={size}
      height={size}
    />
  );
}

export default RankIcon;
