import React from 'react'
import {Row, Col, ListGroup} from 'react-bootstrap'
import EmptyBox from '../images/box.png'
const EmptyCheck =({text, items}) => {

    if(items.length == 0){
        return(<Row>
                <Col>
                    <h2 style={{margin:30}}>{text}</h2>
                    <img style={{ margin:100}}src={EmptyBox}></img>
                </Col>
            </Row>);
    }
    else{
        return(  <ListGroup>
                    {items}
            </ListGroup>);
    }

}

export default EmptyCheck;