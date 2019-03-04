import React from 'react';
import PlantItem from './PlantItem.jsx';

const PlantsPage = ({ plants }) => {
  const mapped = plants.map((plantData, index) => {
    return <PlantItem plantData = {plantData} key = {index + 1}/>
  });
  return (
    <div>
      {mapped}
    </div>
  )
}

export default PlantsPage;