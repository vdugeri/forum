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
import Loader from "components/shared/loader/loader.component";

const SearchExperts = ({ history }) => {
  const [{ data: topics, loading }] = useFetch("/topics", [{ topics: [] }]);
  return (
    <Container>
      {loading ? (
        <Loader />
      ) : (
        <>
          <FlexContainer>
            <Heading>Find Experts</Heading>
            <String>Choose a subject to book a meeting with an expert</String>
          </FlexContainer>
          <SubjectsContainer>
            {topics.map((subject, index) => (
              <HelpSubject
                subject={subject}
                key={index}
                handleClick={() =>
                  history.push(`/dashboard/book/${subject.name}`)
                }
              />
            ))}
          </SubjectsContainer>
        </>
      )}
    </Container>
  );
};

export default withRouter(SearchExperts);
