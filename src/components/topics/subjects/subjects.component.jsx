import React from "react";
import {
  ListContainer,
  Actions,
  StyledButton,
  Table,
  HeaderRow,
  TableHead,
  HeaderItem,
  TableBody,
  TableRow,
  TableItem,
  Image,
  Pagination,
  LinkContainer,
} from "components/experts/expert-table/expert-table.styles";
import useFetch from "effects/use-fetch.effect";
import Spinner from "components/shared/with-spinner/with-spinner.component";
import Icon from "components/shared/icon/icon.component";

const Subjects = () => {
  const [{ data: topics, loading }] = useFetch("/topics", [{ topics: [] }]);
  return (
    <ListContainer>
      <Actions>
        <span>
          1 - {topics.length} of {topics.length}
        </span>
        <StyledButton primary>
          <Icon name="addTopic" />
          Add Subject
        </StyledButton>
      </Actions>
      {loading ? (
        <Spinner />
      ) : (
        <Table>
          <TableHead>
            <HeaderRow>
              <HeaderItem>Icon</HeaderItem>
              <HeaderItem>Name</HeaderItem>
              <HeaderItem>Topic Link</HeaderItem>
            </HeaderRow>
          </TableHead>
          <TableBody>
            {topics.map((topic, index) => (
              <TableRow key={index}>
                <TableItem>
                  <Image src={topic.icon} alt="expert" />
                </TableItem>
                <TableItem>{topic.name}</TableItem>
                <TableItem>{topic.linkUrl}</TableItem>
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

export default Subjects;
