export function convertRankToString(rank: number): string {
  if (rank < 2) {
    return 'Iron';
  }

  if (rank < 3) {
    return 'Bronze';
  }

  if (rank < 4) {
    return 'Silver';
  }

  if (rank < 5) {
    return 'Gold';
  }

  if (rank < 6) {
    return 'Platinum';
  }

  if (rank < 7) {
    return 'Diamond';
  }

  if (rank < 8) {
    return 'Immortal';
  }

  return 'Radiant';
}
