import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";
import { getAccounts } from "../services/AccountService";
import Loader from "./Loader";

const Accounts = () => {
  const [accounts, setAccounts] = useState([]);
  const [page, setpage] = useState(2);
  const [hasMore, sethasMore] = useState(true);

  useEffect(() => {
    getAccounts().then((res) => setAccounts(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchData = async () => {
    const nextAccounts = await getAccounts(page);
    setAccounts([...accounts, ...nextAccounts]);

    if (nextAccounts.length < 10) {
      sethasMore(false);
    }
    setpage(page + 1);
  };

  return (
    <>
      <InfiniteScroll
        dataLength={accounts.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<Loader />}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>That's all folks!!!</b>
          </p>
        }
      >
        <div className="container">
          <div className="row m-2">
            {accounts.map((account) => {
              return (
                <Card key={account.id}>
                  <Card.Body>
                    <Card.Title>
                      {account.debtor.title ? account.debtor.title : ""}{" "}
                      {account.debtor.firstName + " " + account.debtor.lastName}
                    </Card.Title>
                    <Card.Text>
                      <div>
                        <span>Email: </span>
                        <span>{account.debtor.email}</span>
                      </div>
                      <div>
                        <span>Phone No: </span>
                        <span>{account.debtor.mobilePhone}</span>
                      </div>
                      <div>
                        <b>Address</b>
                      </div>
                      <div>
                        <span>Country: </span>
                        <span>{account.debtor.address.country}</span>
                      </div>
                      <div>
                        <span>Zip: </span>
                        <span>{account.debtor.address.zip}</span>
                      </div>
                      <div>
                        <span>State: </span>
                        <span>{account.debtor.address.state}</span>
                      </div>
                      <div>
                        <span>City: </span>
                        <span>{account.debtor.address.city}</span>
                      </div>
                      <div>
                        <span>Address: </span>
                        <span>{account.debtor.address.address}</span>
                      </div>
                    </Card.Text>
                    <Link Link to={`/accounts/${account.id}/claims`}>
                      <Button variant="primary">Check Claims</Button>
                    </Link>
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

export default Accounts;
