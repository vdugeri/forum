import React from "react";
import {
  ExpertTableContainer,
  TableMenuContainer,
  StyledButton,
  ExpertsTable,
  TableRow,
  RowItem,
  Image,
  TableHeader,
  HeaderItem,
  TableBody
} from "components/expert-table/expert-table.styles";
import useFetch from "effects/use-fetch.effect";
import Spinner from "components/loader/loader.component";

const ExpertTable = () => {
  const [{ loading, data: experts }] = useFetch("/experts", [{ experts: [] }]);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Photo</th>
            <th>Name</th>
            <th>Designation</th>
            <th>Email Address</th>
            <th>Location</th>
            <th>Primary Skill</th>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <Spinner />
          ) : (
            <>
              {experts.map((expert, index) => (
                <tr key={index}>
                  <td>
                    <img src={expert.image} alt="expert" />
                  </td>
                  <td>{expert.name}</td>
                  <td>{expert.designation}</td>
                  <td>{expert.emailAddress}</td>
                  <td>{expert.location}</td>
                  <td>{expert.primarySkill}</td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ExpertTable;
