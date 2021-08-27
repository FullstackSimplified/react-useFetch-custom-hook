import { useEffect, useState } from "react";
import useFetch from "./useFetch";
const Address = () => {
  const url = "https://random-data-api.com/api/address/random_address";
  const {
    loading: addressLoading,
    data: addressData,
    error,
  } = useFetch(url, null);
  return (
    <div style={{ margin: 40 }}>
      <h1>Address Component</h1>
      {addressLoading && <p>Loading address....</p>}
      {addressData && <p>Random Address: {addressData?.full_address}</p>}
      {error && <p>Opps something went wrong</p>}
    </div>
  );
};

export default Address;
