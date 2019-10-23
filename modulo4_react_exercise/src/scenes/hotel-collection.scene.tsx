import * as React from "react";
import {Link} from 'react-router-dom';
import { AppLayout } from "layout";
import { routesLinks } from "core";
import { HotelCollectionContainer } from "pods/hotel-collection";

export const HotelCollectionScene = () => {

  return (
    <AppLayout>
      <HotelCollectionContainer/>
      <Link to={routesLinks.login}>Navigate to Login Scene</Link> 
    </AppLayout>
  );
};
