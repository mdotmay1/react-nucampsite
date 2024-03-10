import { PARTNERS } from '../../app/shared/PARTNERS';


/*

FROM TASK 3:
Next, export a const named selectAllPartners. Set the value for this to an arrow function that returns the entire PARTNERS array. 
Look at campsitesSlice.js for a corresponding example.

*/

export const selectAllPartners = () => {
    // return { PARTNERS }  // INITIAL WAY I DID IT.  WHEN DO I NEED CURLY BRACKETS AND WHEN DO I NOT?
    return  PARTNERS;  
};

/*
    FROM TASK 3:
    Next, export a const named selectFeaturedPartner. Set the value for this to an arrow function that finds the first partner with a 
    truthy featured property from the PARTNERS array. You can use the selectFeaturedCampsite() and selectFeaturedPromotions() functions 
    as examples of how to do this.
*/

export const selectFeaturedPartner = () => {
    //PARTNERS.find((featured) => featured === featured); INITIAL WAY I DID IT.  STILL NEED MORE PRACTICE W/ ARROW FUNCTIONS
    return PARTNERS.find((partner) => partner.featured);  
};



