//import { CAMPSITES } from '../../app/shared/CAMPSITES';  //removing since we are now using campsitesSlice
import { useSelector } from 'react-redux';
import { Col, Row } from 'reactstrap';
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from './campsitesSlice';

// const CampsitesList = () => {
//     const campsites = selectAllCampsites();

//     return (     
//         <Row className="ms-auto">
//             {campsites.map((campsite) => {
//                 return (
//                     <Col md="3" className="m-4" key={campsite.id} >
//                         <CampsiteCard campsite={campsite} />
//                     </Col>
//                 );
//             })}
//         </Row>  
//     );
// };

const CampsitesList = () => {
    const campsites = useSelector(selectAllCampsites);
    console.log('campsites:', campsites);

    return (     
        <Row className="ms-auto">
            {campsites.map((campsite) => {
                return (
                    <Col md="3" className="m-4" key={campsite.id} >
                        <CampsiteCard campsite={campsite} />
                    </Col>
                );
            })}
        </Row>  
    );
};

export default CampsitesList;