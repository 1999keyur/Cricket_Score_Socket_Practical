import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pusher from "pusher-js";
import { cricketScoreAction } from "../redux/slices/data/CricketDataSlice";

export default function Dashboard() {
  const dispatch = useDispatch();
  const cricketScoreState = useSelector((state) => state);
  console.log(cricketScoreState)

  const cricketScore = useSelector((state) => state?.cricketData?.cricketScore);
  useEffect(() => {
    document.title = import.meta.env.VITE_APP_NAME;

    const pusher = new Pusher(import.meta.env.VITE_PUSHER_APP_KEY, {
      cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER,
    });

    const channel = pusher.subscribe(import.meta.env.VITE_PUSHER_CHANNEL);
    channel.bind(import.meta.env.VITE_PUSHER_EVENT, (data) => {
      dispatch(cricketScoreAction(data));
    });

    return () => {
      pusher.unsubscribe(import.meta.env.VITE_PUSHER_CHANNEL);
    };
  }, [dispatch]);

  return (
    <div>
      <h3>Dashboard</h3>
      <ul>
        {cricketScore?.map((score, index) => (
          <li key={index}>
            Score: {score?.score}, Timestamp: {score?.timestamp}
          </li>
        ))}
      </ul>
    </div>
  );
}
