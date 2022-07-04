import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function MuiCard({height,title,value,cardColor,titleColor,valueColor}) {
  return (
    <Card sx={{ height:height,backgroundColor:cardColor,textAlign:"center"}}>
      <CardContent>
        <Typography sx={{ fontSize: "3.5vmin",color:titleColor,fontWeight:"bold" }} >
         {title}
        </Typography>
        {/* <Typography sx={{fontSize: "3vmin"}} color="text.secondary">
          adjective
        </Typography> */}
        <Typography sx={{ fontSize: "6.5vmin",color:valueColor }}>
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}
