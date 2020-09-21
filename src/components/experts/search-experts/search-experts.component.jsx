import React from "react";
import { withRouter } from "react-router-dom";
import {} from "components/help-subject/help-subject.component";
import {
  Container,
  Heading,
  String,
  FlexContainer,
  SubjectsContainer,
} from "components/experts/search-experts/search-experts.styles";
import HelpSubject from "components/help-subject/help-subject.component";
import useFetch from "effects/use-fetch.effect";
import Loader from "components/shared/loader.component";

const SearchExperts = ({ history }) => {
  const [{ data: topics, loading }] = useFetch("/topics", [{ topics: [] }]);

  if (loading) return <Loader />;
  return (
    <Container>
      <FlexContainer>
        <Heading>Find Experts</Heading>
        <String>Browse experts by subject</String>
      </FlexContainer>
      <SubjectsContainer>
        {topics.map((subject, index) => (
          <HelpSubject
            subject={subject}
            key={index}
            handleClick={() => history.push(`/dashboard/book/${subject.name}`)}
          />
        ))}
      </SubjectsContainer>
    </Container>
  );
};

export default withRouter(SearchExperts);
