import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ExpandableCard = ({ title, image, content }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="100"
        width="100"
        image={image}
        alt={title}
      />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        {expanded && <Typography>{content}</Typography>}
        <button onClick={toggleExpansion}>
          <ExpandMoreIcon />
        </button>
      </CardContent>
    </Card>
  );
};

export default ExpandableCard;
