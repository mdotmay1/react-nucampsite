// This filename starts w/ lowercase because it doesn't export a component.
// central space to handle all logic that pertains to global campsite data

import { CAMPSITES } from '../../app/shared/CAMPSITES';

export const selectAllCampsites = () => {
    return CAMPSITES;
};


export const selectRandomCampsite = () => {
    return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
}