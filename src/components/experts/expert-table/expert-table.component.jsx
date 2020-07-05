import React from "react";
import { Link, withRouter } from "react-router-dom";
import {
  ListContainer,
  Image,
  Table,
  TableHead,
  TableBody,
  TableRow,
  HeaderItem,
  TableItem,
  HeaderRow,
  Actions,
  StyledButton,
  Pagination,
  LinkContainer,
} from "components/experts/expert-table/expert-table.styles";
import useFetch from "effects/use-fetch.effect";
import Spinner from "components/shared/with-spinner.component";
import Icon from "components/shared/icon.component";

const ExpertTable = ({ match }) => {
  const [{ loading, data: experts }] = useFetch("/experts", [{ experts: [] }]);
  return (
    <ListContainer>
      <Actions>
        <span>Listing 1 - 10 of 50</span>
        <StyledButton primary>
          <Icon name="addUser" />
          Add Expert
        </StyledButton>
      </Actions>
      {loading ? (
        <Spinner />
      ) : (
        <Table>
          <TableHead>
            <HeaderRow>
              <HeaderItem>Photo</HeaderItem>
              <HeaderItem>Name</HeaderItem>
              <HeaderItem>Designation</HeaderItem>
              <HeaderItem>Email Address</HeaderItem>
              <HeaderItem>Location</HeaderItem>
              <HeaderItem>Primary Skill</HeaderItem>
            </HeaderRow>
          </TableHead>
          <TableBody>
            {experts.map((expert, index) => (
              <TableRow key={index}>
                <TableItem>
                  <Image src={expert.image} alt="expert" />
                </TableItem>
                <TableItem>
                  <Link to={`${match.path}/${expert._id}`}>{expert.name}</Link>
                </TableItem>
                <TableItem>{expert.designation}</TableItem>
                <TableItem>{expert.emailAddress}</TableItem>
                <TableItem>{expert.location}</TableItem>
                <TableItem>{expert.primarySkill}</TableItem>
              </TableRow>
            ))}
          </TableBody>
          <Pagination>
            <span>Page 1 of 1 </span>
            <LinkContainer>
              <Icon name="backArrow" />
            </LinkContainer>
            <LinkContainer>
              <Icon name="nextArrow" />
            </LinkContainer>
          </Pagination>
        </Table>
      )}
    </ListContainer>
  );
};

export default withRouter(ExpertTable);

export const Expert = () => <h2>Expert</h2>;
