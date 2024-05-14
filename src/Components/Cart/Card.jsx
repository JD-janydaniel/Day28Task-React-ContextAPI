import "../../index.css";
import React, { useContext } from "react";
import { myContext } from "../../App";

const Card = () => {
  const [data, setData] = useContext(myContext);
  const totalPrice = data.reduce(
    (total, data) => total + data.price * (data.quantity || 1),
    0
  );
  const totalQuantity = data.reduce(
    (total, data) => total + (data.quantity || 1),
    0
  );
  const handleInc = (id, quantity) => {
    setData((curr) => {
      return curr.map((element) => {
        if (element.id === id) {
          return { ...element, quantity: element.quantity + 1 || quantity + 1 };
        }
        return element;
      });
    });
  };
  const handleDec = (id, quantity) => {
    setData((curr) => {
      return curr.map((element) => {
        if (element.id === id && quantity > 1) {
          return { ...element, quantity: element.quantity - 1 || quantity - 1 };
        }
        return element;
      });
    });
  };
  const handleRemove = (id) => {
    setData(data.filter((element) => element.id !== id));
  };
  return (
    <>
      <div className="container p-5">
        <div className="row p-5">
          <div className="col-md-12">
            {data.map((element, index) => {
              return (
                <div key={index}>
                  <div className="card mb-5 bg-bg-body-tertiary shadow overflow-auto ">
                    <div className="row g-0">
                      <div className="col-md-3">
                        <div className="img-box text-center ">
                          <img
                            src={element.images[0]}
                            class="img-fluid rounded mt-5 "
                            alt="..."
                          />
                        </div>
                      </div>
                      <div className="col-md-4 d-flex justify-content-center align-items-center ">
                        <div className="card-body">
                          <h3 className="card-title fs-1 ">{element.title}</h3>
                          <h5 className="card-title fs-2 ">{element.brand}</h5>
                          <p className="card-text fs-3 lead">
                            {element.description}
                          </p>
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="card-body d-flex flex-wrap  justify-content-around align-items-center  mt-5 ">
                          <button
                            className="btn btn-outline-success btn-md-lg  fs-1"
                            onClick={() =>
                              handleInc(element.id, element.quantity || 1)
                            }
                          >
                            {" "}
                            +
                          </button>
                          <p className="fs-1 border border-info p-1 m-1 rounded-1 ">
                            {element.quantity || 1}
                          </p>
                          <button
                            className="btn btn-outline-success btn-lg fs-1  "
                            onClick={() =>
                              handleDec(element.id, element.quantity || 1)
                            }
                          >
                            -
                          </button>
                          <span className="fs-2 p-3 ">${element.price}.00</span>
                        </div>
                        <div className="d-flex justify-content-center align-items-end  m-5 ">
                          <button
                            className=" btn btn-danger fs-2 "
                            onClick={() => handleRemove(element.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>

                      <div className="row ">
                        <div className="col-12">
                          <hr className="ms-2"></hr>
                          <div className="d-flex justify-content-between align-content-center flex-wrap   ">
                            <h3 className="text-muted">SHIPPING:</h3>
                            <h3>FREE</h3>
                          </div>
                          <div className="d-flex justify-content-between align-content-center flex-wrap  ">
                            <h3 className="text-muted">SUBTOTAL:</h3>
                            <h3>
                              $
                              {element.price * element.quantity ||
                                element.price}
                              .00
                            </h3>
                          </div>
                          <hr className="ms-2"></hr>
                          <div className="d-flex justify-content-between align-content-center flex-wrap ">
                            <h3 className="fs-2">TOTAL:</h3>
                            <h3>${totalPrice}.00</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
