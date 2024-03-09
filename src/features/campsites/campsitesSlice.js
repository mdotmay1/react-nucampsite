// This filename starts w/ lowercase because it doesn't export a component.
import { CAMPSITES } from '../../app/shared/CAMPSITES';

export const selectAllCampsites = () => {
    return CAMPSITES;
};


export const selectRamdomCampsite = () => {
    return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
}
