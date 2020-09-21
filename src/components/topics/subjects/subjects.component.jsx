import React from "react";
import useFetch from "effects/use-fetch.effect";
import Loader from "components/shared/loader.component";
import { Table } from "components/shared/table";
import { Contain } from "components/shared/layout";

const Subjects = () => {
  const [{ loading }] = useFetch("/topics", [{ topics: [] }]);

  if (loading) return <Loader />;
  return (
    <Contain>
      <Table></Table>
    </Contain>
  );
};

export default Subjects;
