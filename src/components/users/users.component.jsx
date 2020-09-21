import React from "react";
import useFetch from "effects/use-fetch.effect";
import Spinner from "components/shared/loader.component";
import { Contain } from "components/shared/layout";
import { Table } from "components/shared/table";

const Users = () => {
  const [{ loading }] = useFetch("/users", [{ users: [] }]);

  if (loading) return <Spinner />;

  return (
    <Contain>
      <Table></Table>
    </Contain>
  );
};

export default Users;
