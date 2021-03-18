import React from 'react';
import { DateTime } from 'luxon';

import { Line, LineChart, ResponsiveContainer, Tooltip, TooltipProps, XAxis, YAxis } from 'recharts';
import { useGetSkillLevelTimelineQuery } from '../../generated/graphql';
import LoadingSpinner from '../LoadingSpinner';
import { convertRankToString } from '../../lib/rankConverter';
import RankIcon from '../RankIcon';

interface HeroSkillCardProps {
  userId: number;
}

interface ChartData {
  name: string;
  skillLevel: number;
}

function CustomToolTip(props: TooltipProps<number, string>) {
  const { payload, active, label } = props;

  if (active && payload && payload.length) {
    const skillLevel = payload[0].payload.skillLevel;
    return (
      <div className="bg-surface2">
        <div className="card-body">
          <div>
            <RankIcon skillLevel={skillLevel} />
            <h6 className="card-title text-high d-inline ms-1">{convertRankToString(skillLevel)}</h6>
          </div>
          <p className="card-text">{label}</p>
        </div>
      </div>
    );
  }

  return null;
}

function HeroSkillCard({ userId }: HeroSkillCardProps) {
  const { data, loading, error } = useGetSkillLevelTimelineQuery({ variables: { id: userId } });

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <div>Error {error}</div>;
  }

  const chartData: ChartData[] = data.players.map((p) => {
    const date = DateTime.fromISO(p.createdAt);
    return {
      name: date.toLocaleString({ month: '2-digit', day: '2-digit' }),
      skillLevel: p.skillLevel,
    };
  });
  chartData.reverse();
  chartData.push({
    name: 'now',
    skillLevel: data.currentPlayer?.skillLevel,
  });

  return (
    <div className="card h-100 bg-surface">
      <div className="card-body">
        <h5 className="card-title">Rank Progression - last {chartData.length} games</h5>
        <ResponsiveContainer height={300}>
          <LineChart data={chartData}>
            <XAxis dataKey="name" height={30} tickMargin={10} allowDuplicatedCategory={true} />
            <YAxis width={20} domain={[0, 8]} tickCount={9} interval={0} padding={{ top: 0 }} />
            <Tooltip content={<CustomToolTip />} />
            <Line type="monotone" dataKey="skillLevel" stroke="#8c68cd" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default HeroSkillCard;
