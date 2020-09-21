import React from "react";

import useFetch from "effects/use-fetch.effect";
import Spinner from "components/shared/loader.component";
import { Contain, Table } from "components/shared";

const AdminUsers = () => {
  const [{ loading }] = useFetch("/users?admin=true", [{ users: [] }]);
  if (loading) return <Spinner />;
  return (
    <Contain wide width="100%">
      <Table></Table>)
    </Contain>
  );
};

export default AdminUsers;
