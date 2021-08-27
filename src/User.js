import { useEffect, useState } from "react";
import useFetch from "./useFetch";
const User = () => {
  const url = "https://random-data-api.com/api/users/random_user";
  const { loading: userLoading, data: userData, error } = useFetch(url, null);

  return (
    <div style={{ margin: 40 }}>
      <h1>User Component</h1>
      {userLoading && <p>Loading user....</p>}
      {userData && (
        <p>
          Random user: {userData?.first_name} {userData?.last_name}
        </p>
      )}
      {error && <p>Opps something went wrong</p>}
    </div>
  );
};

export default User;
