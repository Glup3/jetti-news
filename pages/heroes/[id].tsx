import { useRouter } from 'next/router';
import React from 'react';
import HeroTitle from '../../components/Hero/HeroTitle';
import HeroWinrateCard from '../../components/Hero/HeroWinrateCard';

function Hero() {
  const router = useRouter();
  const { id } = router.query;

  const userId = Number(id) || -1;

  return (
    <div className="container my-2">
      <HeroTitle userId={userId} />
      <HeroWinrateCard userId={userId} />
    </div>
  );
}

export default Hero;
