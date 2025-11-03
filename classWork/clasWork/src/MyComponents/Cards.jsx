import React from "react";

const Card = (props) => {
  return (
    <div>
      <div class="card" style={{ width: "18rem" }}>
        <img src="https://www.shutterstock.com/image-vector/flat-vector-cute-cartoon-panda-600nw-2343798945.jpg" class="card-img-top" alt="..." style={{height: "220px"}} />
        <div class="card-body">
          <br />
          <h4 class="card-title">Name: {props.name}</h4>
          <h6>Age: {props.age}</h6>

          <br /><br />
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;