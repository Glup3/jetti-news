import { useRouter } from 'next/router';
import React from 'react';
import HeroTitle from '../../components/Hero/HeroTitle';

function Hero() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container my-2">
      <HeroTitle userId={Number(id) || null} />
    </div>
  );
}

export default Hero;
