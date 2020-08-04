import React from "react";

import XLSX from "xlsx";

const Search = ({ rows }) => {
  const handleXlsx = () => {
    const data = rows.map(row => {
      delete row.id;
      return row;
    });
    var worksheet = XLSX.utils.json_to_sheet(data);

    var new_workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(new_workbook, worksheet, "SheetJS");
    XLSX.writeFile(new_workbook, "filename2.xlsx", {
      alignment: {
        vertical: "center",
        wrapText: true
      },
      fill: {
        patternType: "solid"
      }
    });
  };
  return (
    <div class="filter-search">
      <div class="container">
        <form class="filter-form">
          <select>
            <option value="City">By Enrollment</option>
            <option value="City">By Name</option>
            <option value="City">By Categories</option>
          </select>
          <input
            type="text"
            placeholder="Enter a  name, enrollment or categories"
          />

          <button class="site-btn fs-submit" onClick={handleXlsx}>
            Export to EXCEL{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
