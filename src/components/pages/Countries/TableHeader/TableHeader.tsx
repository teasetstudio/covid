import React, { useRef } from "react";
import { Spinner, Button, Input } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "reducers/store";
import { setSearch } from "reducers/HomeReducer";
import sortImg from "../img/sort-down.svg";
import searchImg from "../img/search.png";
import { IConfig } from "../useSortableData";

interface IProps {
  requestSort(e: string): void;
  sortConfig: IConfig | null;
}

const TableHeader = ({ requestSort, sortConfig }: IProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.home.loading);

  const findCountry = () => {
    if (inputRef.current) {
      dispatch(setSearch(inputRef.current.value));
    }
  };

  const getClassNamesFor = (name: string) => {
    if (!sortConfig) {
      return "d-none";
    }
    return sortConfig.key === name ? sortConfig.direction : "d-none";
  };

  return (
    <div className="alert alert-dark d-flex justify-content-between align-items-center text-center mt-4 mb-2 position-relative">
      <span className="w-25 text-left position-relative">
        <Input
          placeholder="Country"
          type="text"
          innerRef={inputRef}
          onChange={findCountry}
        />
        <img
          className="position-absolute search-img"
          height="25"
          src={searchImg}
          alt="Search"
        />
      </span>
      <span className="w-25">
        <Button
          outline
          color="secondary"
          onClick={() => requestSort("totalCases")}
          className="position-relative"
        >
          Cases
          <img
            className={getClassNamesFor("totalCases")}
            height="25"
            src={sortImg}
            alt=""
          />
        </Button>
      </span>
      <span className="w-25">
        <Button
          outline
          color="secondary"
          onClick={() => requestSort("totalDeath")}
          className="position-relative"
        >
          Death
          <img
            className={getClassNamesFor("totalDeath")}
            height="25"
            src={sortImg}
            alt=""
          />
        </Button>
      </span>
      <span className="w-25 text-right">
        <Button
          outline
          color="secondary"
          onClick={() => requestSort("totalRecovered")}
          className="position-relative"
        >
          Recovered
          <img
            className={getClassNamesFor("totalRecovered")}
            height="25"
            src={sortImg}
            alt=""
          />
        </Button>
      </span>

      {loading && <Spinner color="secondary" className="position-absolute" />}
    </div>
  );
};

export default TableHeader;
