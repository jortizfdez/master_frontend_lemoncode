import { hotelEditRouteParams } from "core";
import { getHotelInfo } from "pods/hotel-collection/hotel-collection.api";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { mapFromApiToVm } from "./hotel-edit.mapper";
import { createDefaultHotel } from "./hotel-edit.vm";
import { HotelEditComponent } from "./hotel-edit.component";

interface Props extends RouteComponentProps {}

export const HotelEditContainerInner = (props: Props) => {
  const { match} = props;
  const [hotel, setHotel] = React.useState(createDefaultHotel());

  const handleChange = (name :string, value : string) => {
    setHotel({
      ...hotel,
      [name]: value
    })
  }

  const handleSave = () => {
    console.log('EOOO');
  }

  const handleRating  = (value: number) => {
    hotel.rating = value;
    console.log(`value: ${value}`);
  }

  React.useEffect(() => {
    getHotelInfo(match.params[hotelEditRouteParams.id]).then(result => {
      const HotelEntityVm = mapFromApiToVm(result);
      setHotel(HotelEntityVm);
    });
  }, []);

  return <HotelEditComponent hotel={hotel} onChange={handleChange} onSave={handleSave} onRatingChange={handleRating}/>;
};

export const HotelEditContainer = withRouter<Props>(HotelEditContainerInner);
