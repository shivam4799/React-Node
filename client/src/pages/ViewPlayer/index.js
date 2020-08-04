import React from "react";
import axios from "axios";

import SinglePlayer from "../../components/viewPlayer/SinglePlayer";

export default function ViewPlayer({ id }) {
  const [playerData, setPlayerData] = React.useState({});
  React.useEffect(() => {
    axios
      .get(`/player/singleplayer/${id}`)
      .then((res) => {
        res.data.id = id;
        setPlayerData(res.data);
      })
      .catch((err) => console.log(err.data));
  }, []);

  return <SinglePlayer data={playerData} />;
}
