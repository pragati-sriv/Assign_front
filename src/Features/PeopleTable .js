import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPeople } from "./PeopleSlice";
import {
  CircularProgress,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Paper,
} from "@mui/material";

const PeopleTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();
  const people = useSelector((state) => state.people.entities);
  const status = useSelector((state) => state.people.status);
  const error = useSelector((state) => state.people.error);

  useEffect(() => {
    dispatch(fetchPeople(searchQuery));
  }, [dispatch, searchQuery]);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Paper>
      <TextField
        label="Search"
        fullWidth
        margin="normal"
        onChange={handleSearch}
      />
      {status === "loading" && <CircularProgress />}
      {status === "failed" && <p>Error: {error}</p>}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Height</TableCell>
            <TableCell>Mass</TableCell>
            <TableCell>Hair Color</TableCell>
            <TableCell>Skin Color</TableCell>
            <TableCell>Eye Color</TableCell>
            <TableCell>Birth Year</TableCell>
            <TableCell>Gender</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {people.map((person) => (
            <TableRow key={person.name}>
              <TableCell>{person.name}</TableCell>
              <TableCell>{person.height}</TableCell>
              <TableCell>{person.mass}</TableCell>
              <TableCell>{person.hair_color}</TableCell>
              <TableCell>{person.skin_color}</TableCell>
              <TableCell>{person.eye_color}</TableCell>
              <TableCell>{person.birth_year}</TableCell>
              <TableCell>{person.gender}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default PeopleTable;
