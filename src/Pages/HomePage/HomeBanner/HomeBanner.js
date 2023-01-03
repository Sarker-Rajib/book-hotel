import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { FaCalendarAlt, FaChevronDown, } from "react-icons/fa";
import '../HomeBanner/HomeBanner.css';

const HomeBanner = () => {
    const [quantityDialogue, setQuantityDialogue] = useState(false);
    const [checkIn, setCheckIn] = useState(false);
    const [indate, setIndate] = useState("Check In");
    const [outdate, setOutdate] = useState("Check Out");
    const [checkOut, setCheckOut] = useState(false);
    const [room, setRooms] = useState(2);
    const [adults, setAdults] = useState(3);
    const [child, setChilds] = useState(0);


    return (
        <div className='home-banner d-flex align-items-center justify-content-center'>
            {/* <form> */}
            <div className='d-flex align-items-center'>
                <div className='buttons-wrapper me-2'>
                    <div className='d-flex align-items-center justify-content-center position-relative'>
                        <div className='search-filter-button'>
                            <button
                                className="buton"
                                onClick={() => setCheckIn(!checkIn)}
                            >
                                <FaCalendarAlt />
                                <span className='mx-2'>{indate}</span>
                                <FaChevronDown />
                            </button>

                            {checkIn &&
                                <div className='date-box'>
                                    <input
                                        onChange={(e) => {
                                            setIndate(e.target.value)
                                        }}
                                        type="date" className='form-control' />
                                    <br />
                                    <button
                                        onClick={() => setCheckIn(!checkIn)}
                                        className='button-done'>Done</button>
                                </div>
                            }
                        </div>
                        <div className='search-filter-button'>
                            <button
                                className="buton"
                                onClick={() => setCheckOut(!checkOut)}>
                                <FaCalendarAlt />
                                <span className='mx-2'>{outdate}</span>
                                <FaChevronDown />
                            </button>

                            {checkOut &&
                                <div className='date-box'>
                                    <input
                                        onChange={(e) => {
                                            setOutdate(e.target.value)
                                        }}
                                        type="date" className='form-control' />
                                    <br />
                                    <button
                                        onClick={() => setCheckOut(!checkOut)}
                                        className='button-done'>Done</button>
                                </div>
                            }

                        </div>
                        <div
                            className='search-filter-button border-0'
                        >
                            <button
                                className="buton"
                                onClick={() => setQuantityDialogue(!quantityDialogue)}>
                                <p className='mb-0'>{adults} Adults. {child} Childres. {room} Rooms <FaChevronDown /></p>
                            </button>


                            {
                                quantityDialogue &&
                                <div className='quantity'>
                                    <p>Lorem ipsum dolor sit amet.</p>
                                    <div className='d-flex mb-2 justify-content-between'>
                                        <div>
                                            <h6 className='m-0'>Rooms</h6>
                                            <p>Lorem ipsum dolor sit </p>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <button
                                                onClick={() => setRooms(room - 1)}
                                                className='calc-button'
                                                disabled={room === 1}
                                            >-</button>
                                            <span className='fs-5 mx-1'> {room} </span>
                                            <button
                                                onClick={() => setRooms(room + 1)}
                                                className='calc-button'>+</button>
                                        </div>
                                    </div>
                                    <div className='d-flex mb-2 justify-content-between'>
                                        <div>
                                            <h6 className='m-0'>Adults</h6>
                                            <p>Lorem ipsum dolor sit </p>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <button
                                                onClick={() => setAdults(adults - 1)}
                                                className='calc-button'
                                                disabled={adults === 1}
                                            >-</button>
                                            <span className='fs-5 mx-1'> {adults} </span>
                                            <button
                                                onClick={() => setAdults(adults + 1)}
                                                className='calc-button'>+</button>
                                        </div>
                                    </div>
                                    <div className='d-flex mb-2 justify-content-between'>
                                        <div>
                                            <h6 className='m-0'>Children</h6>
                                            <p>Lorem ipsum dolor sit </p>
                                        </div>
                                        <div className='d-flex align-items-center'>
                                            <button
                                                onClick={() => setChilds(child - 1)}
                                                className='calc-button'
                                                disabled={child === 0}
                                            >-</button>
                                            <span className='fs-5 mx-1'> {child} </span>
                                            <button
                                                onClick={() => setChilds(child + 1)}
                                                className='calc-button'>+</button>
                                        </div>
                                    </div>
                                    <div className="text-center">
                                        <button
                                            onClick={() => setQuantityDialogue(false)}
                                            className='button-done'>Done</button>
                                    </div>
                                </div>
                            }
                        </div>

                    </div>
                </div>
                <div>
                    <Button variant='warning'>Check Availability</Button>
                </div>
            </div>
            {/* </form> */}
        </div>
    );
};

export default HomeBanner;