import * as React from "react";
import { HotelEntityVm } from "./hotel-collection.vm";
import { HotelCard } from "./components";
import makeStyles  from '@material-ui/core/styles/makeStyles'; //Forma nueva de meter CSS in JS con HOOKS.

interface Props {
    hotelCollection: HotelEntityVm[];
    onEdit: (id : string) => void;
}

const useStyles = makeStyles({
  listLayout: {
    display: 'flex',
    flexWrap:'wrap',
    justifyContent: 'space-between',
  }
});


export const HotelCollectionComponent = (props: Props) => {

    const {hotelCollection, onEdit} = props;
    const classes = useStyles(props);

  return (
    <div className={classes.listLayout}>
    {
        hotelCollection.map((hotel) => <HotelCard key={hotel.id} hotel={hotel} onEdit={onEdit}/>)
    }
    </div>
  );
}