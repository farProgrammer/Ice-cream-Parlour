import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cream from "../components/Cream";
import { getAllFlavours } from "../actions/flavoursActions";
// import flavours from "../flavoursdata";

export default function Home() {
  const dispatch = useDispatch();
  const flavoursstate = useSelector((state) => state.getAllFlavoursReducers);
  const { flavours, error, loading } = flavoursstate;
  useEffect(() => {
    dispatch(getAllFlavours());
  }, [dispatch]);
  return (
    <div>
      <div className="row justify-content-center">
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>Something went wrong</h1>
        ) : (
          flavours.map((flavours) => {
            return (
              <div className="col-md-4 p-3 m-3">
                <div className="m-3" key={flavours._id}>
                  <Cream flavours={flavours} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
