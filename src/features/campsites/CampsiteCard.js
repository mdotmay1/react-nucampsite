/*

Task 1 - Part 1: Create CampsiteCard.js

In VS Code, create a new file inside the nucampsite/src/features/campsites/ folder named CampsiteCard.js.
In this file, import the following components from reactstrap: Card, CardImg, CardImgOverlay, CardTitle
Use a const keyword and an arrow function, define a function component named CampsiteCard, with a parameter list containing the parameter of props.
Inside this CampsiteCard component, set up a return statement that renders a Card component. When you are asked to render a component or element, unless explicitly instructed to use a self-closing tag, use both start and end tags as you see below:

*/


import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'; 

const CampsiteCard = (props) => {
    return (
        <Card>
            <CardImg    
                width='100%'
                src={props.campsite.image}
                alt={props.campsite.name}
            />
            <CardImgOverlay>
                <CardTitle>{props.campsite.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
}


export default CampsiteCard


/*

Notes:

For TASK 1 - PART 1 - Why does CardImg just have a self-closing tag?

*/