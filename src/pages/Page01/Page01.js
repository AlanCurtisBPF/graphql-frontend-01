import React, { useEffect, useState } from "react";
import axios from "axios";

const Page01 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/graphql?query={customers{name,age}}`)
      .then((res) => {
        setUsers(res.data.data.customers);
      });
  }, []);

  return (
    <div className="Page01">
      Page01
      <div>
        {users.map((user, i) => (
          <div key={i}>{user.name}</div>
        ))}
      </div>
    </div>
  );
};

export default Page01;
