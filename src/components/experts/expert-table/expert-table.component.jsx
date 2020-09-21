import React from "react";
import { withRouter } from "react-router-dom";
import useFetch from "effects/use-fetch.effect";
import Loader from "components/shared/loader.component";
import { Table } from "components/shared/table";
import { Contain } from "components/shared/layout";

const ExpertTable = ({ match }) => {
  const [{ loading }] = useFetch("/experts", [{ experts: [] }]);

  if (loading) return <Loader />;
  return (
    <Contain wide width="100%">
      <Table></Table>
    </Contain>
  );
};

export default withRouter(ExpertTable);

export const Expert = () => <h2>Expert</h2>;
