import React from 'react'
import { Card, CardContent, Typography } from '@material-ui/core'
import '../App.css'
import Shoes from '../shos.json'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <Card className="m-card" >
                <CardContent className="mm-card" >

                    {Object.keys(Shoes).map(keyname => {
                        const product = Shoes[keyname];
                        return (
                            <Card className="mmm-card">
                                <CardContent  >
                                    <img className="img" src={product.img} height={300} alt="" />
                                    <h3 className="shoe-Name"> {product.name} </h3>
                                    <Typography className="shoe-price" color="textSecondary" > {product.price} </Typography>

                                    <Link key={keyname} to={`/product/${keyname}`} > <button type="button" class="btn btn-outline-dark m-btn">Learn More</button>  </Link>
                                       
                                </CardContent>
                            </Card>
                        )
                    })}
                </CardContent>
            </Card>
        </div>
    )
}

export default Home
