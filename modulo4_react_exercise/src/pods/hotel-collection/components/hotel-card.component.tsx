
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Theme, Typography } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { HotelEntityVm } from "../hotel-collection.vm";


interface Props {
  hotel: HotelEntityVm;
  onEdit: (id: string) => void;
}

const useStyles = makeStyles((theme : Theme) => ({
  card: {
    width: '500px',
    marginTop: '10px',
  }
}));

export const HotelCard = (props: Props) => {
  const { hotel , onEdit} = props;
  const classes = useStyles(props);

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={<Avatar aria-label="hotel">{hotel.rating}</Avatar>}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={hotel.name}
        subheader={hotel.address}
      />
      <CardContent>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center"
          }}
        >
          <CardMedia
            image={hotel.picture}
            title={hotel.name}
            style={{ height: 0, paddingTop: '30%'}}
          />
          <Typography variant="subtitle1" gutterBottom>
              {hotel.description}
          </Typography>
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Edit" onClick={() => onEdit(hotel.id)}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="Remove">
          <DeleteIcon />
        </IconButton>        
      </CardActions>
    </Card>
  );
};
