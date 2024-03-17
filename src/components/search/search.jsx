import React from 'react'
import BoxSearch from './box'
import AccordionSearch from './accordion'
import { Accordion } from 'react-bootstrap';
import './search.css'

const Search = () => {
    return (
        <div className='search-box-body'>
            <Accordion>
                <BoxSearch eventKey="0"/>
                <AccordionSearch />
            </Accordion>
        </div>
    )
}

export default Search