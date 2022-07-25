import React, { Component } from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';

class SolarSystem extends Component {
  render() {
    return (
      <div className="container-system" data-testid="solar-system">
        <div>
          <Title headline="Planetas" />
        </div>
        <div className="container-planet">
          {planets.map((planet) => (<PlanetCard
            planetName={ planet.name }
            planetImage={ planet.image }
            key={ planet.name }
          />))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
