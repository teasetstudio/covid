import React from "react";

import { Bar } from "react-chartjs-2";

const Chats = ({ data, opt }: any) => {
  return (
    <div>
      <Bar data={data} options={opt} type redraw={false} />
      {/* <br />
            <Bar
              data={dataHome(topTenCases, "totalCases")}
              options={optionHome("Total Cases")}
              type
            /> */}
    </div>
  );
};

export default Chats;
