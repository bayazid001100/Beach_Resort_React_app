import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state ={
        services:[
            {
                icons:<FaCocktail/>,
                title:"free Cocktails",
                info:"Loren ipsum dolor sit amet consectetur adipiscring elit. Magn1, corporis!"
            },
            {
                icons:<FaHiking/>,
                title:"free Hikings",
                info:"Loren ipsum dolor sit amet consectetur adipiscring elit. Magn1, corporis!"
            },
            {
                icons:<FaShuttleVan/>,
                title:"free Shuttle",
                info:"Loren ipsum dolor sit amet consectetur adipiscring elit. Magn1, corporis!"
            },
            {
                icons:<FaBeer/>,
                title:"Strong Beer",
                info:"Loren ipsum dolor sit amet consectetur adipiscring elit. Magn1, corporis!"
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"/>  
                <div className="services-center">
                {this.state.services.map((item,index) => {
                    return (
                        <article key= {index} className="service">
                            <span>{item.icons}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    )
                })}
                </div>
            </section>
        )
    }
}
