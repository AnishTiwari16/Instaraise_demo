import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../../scss/components/_cards.css';
import { TABS_DATA } from '../../../config/HomeConfig/CardConfig/config.tabs';

const Cards = (props) => {
    const [search, setSearch] = useState('');
    const items = props.currentReducer;
    return (
        <>
            <div className="container mt-5">
                <div className="row g-0">
                    <div className="col">
                        <ul
                            className="nav nav-pills mb-3 ml-3"
                            id="pills-tab"
                            role="tablist"
                        >
                            {TABS_DATA.map((val) => (
                                <li className="nav-item active">
                                    <a
                                        className="nav-link"
                                        id="pills-home-tab"
                                        data-toggle="pill"
                                        href="#pills-home"
                                        role="tab"
                                        aria-controls="pills-home"
                                        aria-selected="true"
                                        onClick={() =>
                                            props.filterItemData(val.tabCateg)
                                        }
                                    >
                                        <span>{val.tabName}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="input-group searchEdit">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search Posts"
                            onChange={(event) => {
                                setSearch(event.target.value);
                            }}
                        />
                    </div>
                </div>
                <div className="row hoverChange">
                    {items
                        .filter((props) => {
                            if (search === '') {
                                return props;
                            } else if (
                                props.subtitle
                                    .toLowerCase()
                                    .includes(search.toLowerCase())
                            ) {
                                return props;
                            }
                            return false;
                        })
                        .map((props, index) => (
                            <>
                                <div
                                    key={index}
                                    className="col-md-4 py-3 py-sm-0 px-4 cardEdit"
                                >
                                    <img
                                        src={props.image_url}
                                        alt="image_description"
                                    />
                                    <div className="imageInfo">
                                        <div className="item-title">
                                            <h5>{props.subtitle}</h5>
                                        </div>
                                        <div className="item-desc">
                                            <p>{props.description}</p>
                                        </div>
                                    </div>
                                    <div className="cardFooter">
                                        <h6>{props.cardDate}</h6>
                                        <div className="alignbtn">
                                            <Link to={props.routesLink}>
                                                Read More
                                                <i className="fa fa-angle-right"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                </div>
            </div>
        </>
    );
};

export default Cards;
{
    /* <li className="nav-item">
                                <a
                                    class="nav-link active"
                                    id="pills-profile-tab"
                                    data-toggle="pill"
                                    href="#pills-profile"
                                    role="tab"
                                    aria-controls="pills-profile"
                                    aria-selected="false"
                                    onClick={() => props.filterItemData('All')}
                                >
                                    <span>All</span>
                                </a>
                            </li> */
}
