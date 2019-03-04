import React from 'react';
import styles from '../css/PlantItem.css';

const PlantItem = ({plantData}) => {

  return (
    <div className={styles.plantItem}>
    <div>{plantData.name}</div>
    <div>{plantData.plantType}</div>
    <div>{plantData.dateLastEdit}</div>
    </div>
  )
}

export default PlantItem;