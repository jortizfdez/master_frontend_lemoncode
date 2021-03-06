import Axios from 'axios';
import {baseApiUrl} from 'core';

export interface HotelEntityApi {
    id: string;
    type: string;
    name: string;
    created: Date;
    modified: Date;
    address1: string,
    airportCode: string;
    amenityMask: number;
    city: string;
    confidenceRating: number;
    countryCode: string;
    deepLink: string;
    highRate: number;
    hotelId: number;
    hotelInDestination: boolean;
    hotelRating: number;
    location: {
      latitude: number;
      longitude: number;
    },
    locationDescription: string;
    lowRate: number;
    metadata: {
      path: string;
    },
    postalCode: number;
    propertyCategory: number;
    proximityDistance: number;
    proximityUnit: string;
    rateCurrencyCode: string;
    shortDescription: string;
    stateProvinceCode: string;
    thumbNailUrl: string;
    tripAdvisorRating: number;
    tripAdvisorRatingUrl: string;  
}

const getHotelsUrl = `${baseApiUrl}/api/hotels`;
const getHotelInfoUrl = (hotelId: string) => {
  return `${baseApiUrl}/api/hotels/${hotelId}`;
}

export const getHotelCollection = () : Promise<HotelEntityApi[]> => {
    const promise = new Promise<HotelEntityApi[]>((resolve, reject) => 
        Axios.get<HotelEntityApi[]>(getHotelsUrl).then(
            (response) => resolve(response.data)
        ));

    return promise;

}

export const getHotelInfo = (hotelId: string) : Promise<HotelEntityApi> => {

  const promise = new Promise<HotelEntityApi>((resolve, reject) => 
        Axios.get<HotelEntityApi>(getHotelInfoUrl(hotelId)).then(
            (response) => resolve(response.data)
        ));

    return promise;
}

