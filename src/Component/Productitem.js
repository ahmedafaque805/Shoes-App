import React from 'react'
import { useParams } from 'react-router-dom'
import Shoes from '../shos.json'
import '../App.css'
import { Typography, Card, CardContent } from '@material-ui/core'


function Productitem() {
  const { id } = useParams();
  console.log(id);
  const product = Shoes[id]
  console.log(product);

  if (!product)
    return <h2>Not return</h2>


  return (
    <div>
      <Card className="p-card" >
        <CardContent className="pp-card" >

          <div className="p-left">

            <h3 className="shoe-Name"> {product.name} </h3>
            <Typography className="shoe-price" color="textSecondary" style={{ fontSize: "30px" }} > {product.price} </Typography>
            <p style={{ color: "black", marginLeft: "0.5rem" }}>{product.dis}</p>
            <button type="button" class="btn btn-outline-dark m-btn">Add to Cart</button>

          </div>

          <div className="p-right">
            <video className="video" width="520" height="380" autoPlay>
            <source src={product.video} type="video/mp4" />
            </video>
          </div>
        </CardContent>
      </Card>




    </div>
  )
}

export default Productitem
