import React from "react";
import {
  TableContainer,
  Image,
  Table,
  TableHead,
  TableRow,
  HeaderItem,
  TableItem,
  HeaderRow
} from "components/expert-table/expert-table.styles";
import useFetch from "effects/use-fetch.effect";
import Spinner from "components/loader/loader.component";

const ExpertTable = () => {
  const [{ loading, data: experts }] = useFetch("/experts", [{ experts: [] }]);
  return (
    <TableContainer>
      {loading ? (
        <Spinner />
      ) : (
        <Table>
          <TableHead>
            <HeaderRow>
              <HeaderItem>&nbsp;</HeaderItem>
              <HeaderItem>Photo</HeaderItem>
              <HeaderItem>Name</HeaderItem>
              <HeaderItem>Designation</HeaderItem>
              <HeaderItem>Email Address</HeaderItem>
              <HeaderItem>Location</HeaderItem>
              <HeaderItem>Primary Skill</HeaderItem>
            </HeaderRow>
          </TableHead>
          <tbody>
            {experts.map((expert, index) => (
              <TableRow key={index}>
                <TableItem>&nbsp;</TableItem>
                <TableItem>
                  <Image src={expert.image} alt="expert" />
                </TableItem>
                <TableItem>{expert.name}</TableItem>
                <TableItem>{expert.designation}</TableItem>
                <TableItem>{expert.emailAddress}</TableItem>
                <TableItem>{expert.location}</TableItem>
                <TableItem>{expert.primarySkill}</TableItem>
              </TableRow>
            ))}
          </tbody>
        </Table>
      )}
    </TableContainer>
  );
};

export default ExpertTable;
