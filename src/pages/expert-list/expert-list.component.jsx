import React, { useState } from "react";
import { ListContainer, Heading } from "pages/expert-list/expert-list.styles";
import BackLink from "components/back-link/backlink.component";
import ExpertBox from "components/expert-box/expert-box.component";
import useFetch from "effects/use-fetch.effect";
import Loader from "components/loader/loader.component";
import ExpertProfile from "components/expert-profile/expert-profile.component";

const ExpertList = ({ match }) => {
  const [{ data: experts, loading }] = useFetch("/experts", []);
  const [currExpert, setCurrExpert] = useState(null);
  return (
    <ListContainer>
      {loading ? (
        <Loader />
      ) : (
        <>
          <BackLink linkText="Find Experts" linkUrl="/dashboard/book" />
          <Heading>{match.params.subject}</Heading>
          {experts.map((expert, index) => (
            <ExpertBox
              expert={expert}
              key={index}
              handleClick={() => setCurrExpert(expert)}
            />
          ))}
        </>
      )}
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
