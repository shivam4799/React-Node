import React from "react";
import axios from "axios";

import AddPlayer from "../../components/addplayer/AddPlayer";

export default function AddPlayerWrapper({ id }) {
  const [Edit, updateEdit] = React.useState({});

  console.log(id);

  React.useEffect(() => {
    axios
      .get("/player/singleplayer/" + id)
      .then((response) => {
        console.log(response);
        updateEdit(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // const edit = { collageId: 5, Enrollment: 160410107093, dob: "2020-06-03" };
  return <AddPlayer edit={Edit} type="update" id={id} />;
}
