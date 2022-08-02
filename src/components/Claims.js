import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Card } from "react-bootstrap";
import { getClaimsByAccountId } from "../services/ClaimService";
import { getAccountById } from "../services/AccountService";
import { formatCurrency } from "./utils/util";
import "./Claims.css";

const Claims = () => {
  const { id } = useParams();
  const [accountHolder, setAccountHolder] = useState({});
  const [claims, setClaims] = useState([]);
  const [showCopied, setShowCopied] = useState(false);

  useEffect(() => {
    getAccountById(id).then((res) => setAccountHolder(res[0].debtor));
    getClaimsByAccountId(id).then((res) => setClaims(res));
  }, [id]);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location);
    setShowCopied(true);
    setTimeout(() => {
      setShowCopied(false);
    }, 2000);
  };
  return (
    <>
      <div className="copy-button">
        <Button variant="info" onClick={handleCopy}>
          Copy URL to Clipboard
        </Button>
        {showCopied && <span>Copied ✓</span>}
      </div>
      <div className="container">
        <div>
          {accountHolder.title ? accountHolder.title : ""}{" "}
          {accountHolder.firstName + " " + accountHolder.lastName}
        </div>
        {claims.map((claim) => {
          return (
            <Card key={claim.id}>
              <Card.Header>
                <div>
                  <span>
                    <b>Status:</b>{" "}
                  </span>
                  <span
                    style={{
                      color: claim.status === "PAID" ? "green" : "red",
                    }}
                  >
                    <b>{claim.status}</b>
                  </span>
                </div>
              </Card.Header>
              <Card.Body>
                <p className="claim-container">
                  <div>
                    <span>Base Amount: </span>
                    <span>
                      {formatCurrency(claim.baseAmount, claim.currency)}
                    </span>
                  </div>
                  <div>
                    <span>Fees: </span>
                    <span>{formatCurrency(claim.fees, claim.currency)}</span>
                  </div>
                  <div>
                    <span>Due Date: </span>
                    <span>{claim.dueDate}</span>
                  </div>
                </p>
                <footer></footer>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default Claims;
