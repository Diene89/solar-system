import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <section>
        <div className="missions" data-testid="missions">
          <Title headline="Missões" />
        </div>
        <div className="container-missions">
          {missions.map((mission) => {
            const { name, year, country, destination } = mission;
            return (<MissionCard
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
              key={ name }
            />);
          })}
        </div>
      </section>
    );
  }
}

export default Missions;
