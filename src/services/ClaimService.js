export const getAllClaims = async () => {
  return await (await fetch("http://localhost:9000/claims")).json();
};

export const getClaimsByAccountId = async (id) => {
  const claims = await getAllClaims();
  // eslint-disable-next-line eqeqeq
  return claims.filter((claim) => id == claim.accountId);
};
