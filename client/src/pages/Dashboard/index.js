import React from "react";
import axios from "axios";

import Orders from "../../components/dashboard/Orders";

const Playerpage = () => {
  const [rows, setRows] = React.useState([
    {
      Sr: 1,
      Enrollment: 160410107093,
      CollegeID: "16BECEG059",
      Name: "Shivam Patel",
      BirthDate: "1/1/1999",
    },
  ]);

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("/player/");

      let rr = res.data.map((d, i) => {
        delete d.images;
        return {
          Sr: ++i,
          id: d._id,
          Enrollment: d.Enrollment,
          CollegeID: d.collageId,
          Name: d.fullName,
          BirthDate: d.dob,
        };
      });

      setRows(rr);
    };
    fetchData();
  }, []);
  console.log(rows);

  const [selected, setSelected] = React.useState(null);
  const [edit, setEdit] = React.useState(false);
  const [players, setSindlePlayer] = React.useState(null);

  const handleSinglePlayer = (id) => {
    const filterdata = rows.filter((row) => row.Sr == id);
    setSelected(filterdata);
  };
  const handleBack = () => {
    setSelected(null);
  };

  console.log("filterData", selected);

  const handleEdit = (id) => {
    setEdit(true);
    const singleData = rows.filter((row) => row.id === id);
    console.log(singleData);

    setSindlePlayer(singleData[0]);
  };
  console.log(players);

  return (
    <Orders
      datas={rows}
      handleSinglePlayer={handleSinglePlayer}
      handleEdit={handleEdit}
    />
  );
};

export default Playerpage;
