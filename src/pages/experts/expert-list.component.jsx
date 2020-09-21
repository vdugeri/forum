import React, { useState } from "react";
import { ListContainer, Heading } from "pages/experts/expert-list.styles";
import BackLink from "components/shared/backlink.component";
import ExpertBox from "components/experts/expert-box/expert-box.component";
import useFetch from "effects/use-fetch.effect";
import Loader from "components/shared/loader.component";
import ExpertProfile from "components/experts/expert-profile/expert-profile.component";

const ExpertList = ({ match }) => {
  const [{ data: experts, loading }] = useFetch("/experts", { data: [] });
  const [currExpert, setCurrExpert] = useState(null);

  if (loading) return <Loader />;

  return (
    <ListContainer>
      <BackLink linkText="Find Experts" linkUrl="/dashboard/book" />
      <Heading>{match.params.subject}</Heading>
      {experts.data.map((expert, index) => (
        <ExpertBox
          expert={expert}
          key={index}
          handleClick={() => setCurrExpert(expert)}
        />
      ))}
      {currExpert && (
        <ExpertProfile
          expert={currExpert}
          onClose={() => setCurrExpert(null)}
        />
      )}
    </ListContainer>
  );
};

export default ExpertList;
