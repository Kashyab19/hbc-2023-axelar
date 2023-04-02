import React from 'react';
import {useNavigate} from "react-router-dom";
import Card from '../Cards/card';
import beepleBeach from '../Images/beeplebeach.jpeg';
import boredApe from '../Images/boredApe.jpg';
import replicator from '../Images/Replicator.jpeg';
import {withRouter} from 'react-router';

const sellData = () => {
  // const navigate = useNavigate();
  const colors=[{"id": "1", "image":beepleBeach},{"id": "2", "image":boredApe },{"id": "3", "image":replicator}]
  return(
    <div>
      <h2 style={{textAlign: 'center' }}>Home</h2>
      <div style={{ textAlign: 'center' }}>
        {colors.map((selectedColor) => (<Card key={selectedColor.id} image={selectedColor.image} ></Card>))}
      </div>
    </div>
  );
}

export default withRouter(sellData);