import * as React from "react";
import { HotelCollectionComponent } from "./hotel-collection.component";
import { HotelEntityVm } from "./hotel-collection.vm";
import { mapFromApiCollectionToVmCollection } from "./hotel-collection.mapper";
import { getHotelCollection } from "./hotel-collection.api";
import { routesLinks } from "core";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface Props extends RouteComponentProps {

}

export const HotelCollectionContainerInner = (props: Props) => {

    const {history} = props;
    const [hotelCollection, setHotelCollection] = React.useState<HotelEntityVm[]>([]);

      React.useEffect(() => {
        getHotelCollection().then((result) => {
            const hotelCollectionVm = mapFromApiCollectionToVmCollection(result);
            setHotelCollection(hotelCollectionVm);
        })
    },[])


    const onEditHotel = (id:string) => {
        history.push(routesLinks.hotelEdit(id));
    }

    return (
        <HotelCollectionComponent hotelCollection={hotelCollection} onEdit={onEditHotel} />
    );
};

export const HotelCollectionContainer = withRouter<Props>(HotelCollectionContainerInner);