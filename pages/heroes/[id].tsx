import { useRouter } from 'next/router';
import React from 'react';
import AlinaStats from '../../components/Hero/AlinaStats/AlinaStats';
import HeroRecentMatchesCard from '../../components/Hero/HeroRecentMatchesCard';
import HeroTitle from '../../components/Hero/HeroTitle';
import HeroWinrateCard from '../../components/Hero/HeroWinrateCard';

function Hero() {
  const router = useRouter();
  const { id } = router.query;

  const userId = Number(id) || -1;

  return (
    <div className="container my-2">
      <div className="row">
        <div className="col-md mb-2">
          <div className="row">
            <HeroTitle userId={userId} />
            <div>
              <div className="mb-2">
                <HeroWinrateCard userId={userId} />
              </div>
            </div>

            <AlinaStats userId={userId} />
          </div>
        </div>
        <div className="col-md">
          <HeroRecentMatchesCard userId={userId} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
