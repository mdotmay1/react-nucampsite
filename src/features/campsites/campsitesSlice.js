// This filename starts w/ lowercase because it doesn't export a component.
// central space to handle all logic that pertains to global campsite data

import { createSlice } from '@reduxjs/toolkit';
import { CAMPSITES } from '../../app/shared/CAMPSITES';

const initialState = {
    campsitesArray: CAMPSITES
};

const campsitesSlice = createSlice({
    name: 'campsites',
    initialState
});

export const campsitesReducer = campsitesSlice.reducer;

export const selectAllCampsites = () => {
    return CAMPSITES;
};


export const selectRandomCampsite = () => {
    return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
};


export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === parseInt(id));
};


export const selectFeaturedCampsite = () => {
    return CAMPSITES.find((campsite) => campsite.featured);
};