import React from "react";
import Header from "../../components/common/Header";
import Path from "../../components/common/Path";
import TableHeader from "../../components/historyPage/TableHeader";

const History = () => {
  return (
    <>
      <Header />
      <div className="flex justify-center">
        <Path />
      </div>
      <TableHeader />
    </>
  );
};

export default History;
