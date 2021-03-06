import {basePicturesUrl} from 'core';
import { HotelEntityApi } from 'pods/hotel-collection/hotel-collection.api';
import { HotelEntityVm } from './hotel-edit.vm';

export const mapFromApiToVm = (apiEntity: HotelEntityApi) : HotelEntityVm => ({

    id: apiEntity.id,
    picture: `${basePicturesUrl}${apiEntity.thumbNailUrl}`,
    name: apiEntity.name,
    rating: apiEntity.hotelRating,
    description: apiEntity.shortDescription,
    address: apiEntity.address1,
    city: apiEntity.city,
});