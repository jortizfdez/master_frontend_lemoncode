import { routesLinks } from "core";
import { AppLayout } from "layout";
import * as React from "react";
import { Link } from 'react-router-dom';
import { HotelEditContainer } from "pods/hotel-edit";

export const HotelEditScene = () => {

  return (
    <AppLayout>
      <HotelEditContainer/>
      <Link to={routesLinks.hotelCollection}>Navigate to Hotel Collection Scene</Link> 
    </AppLayout>
  );
};
