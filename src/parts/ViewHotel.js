import React from 'react'
import Button from 'elements/Button'

export default function ViewHotel(props) {
    return (
        <section className="container">
            <h5 className="mb-3">
                View Hotel
            </h5>
            <div className="container-grid">
            {props.data.map((item,index)=>{
                    return ( 
                    <div 
                    key={`view-hotel-${index}`}
                    className={'item column-6 ${index === 0 ? " row-2" : " row-1"}'}>
                    <div className="card">
                        <div className="card card-featured">
                            <div className="tag text-gray-100">
                                 ${item.price}
                                <span className="text-gray-200">
                                    per {item.unit}
                                </span>
                            </div>
                            <figure className="img-wrapper">
                                <img src={item.imageUrl}
                                alt={item.name}
                                className="img-cover"
                                />                             
                            </figure>
                            <div className="meta-wrapper">
                                <Button
                                type="link"
                                className="streched-link d-block text-white"
                                href="{`/properties/${item._id}`}"
                                >
                                    <h5>
                                        {item.name}
                                    </h5>
                                </Button>
                                <span>
                                    {item.city}, {item.country}
                                </span>
                             </div>   
                        </div>
                    </div>
                    </div>
                    ); 
                                     
                })}                         
            </div>
        </section>
    );
}
