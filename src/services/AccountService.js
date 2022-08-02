export const getAccounts = async (page = 1, limit = 10) => {
  const result = await (
    await fetch(`http://localhost:9000/accounts?_page=${page}&_limit=${limit}`)
  ).json();
  return result;
};

export const getAccountById = async (id) => {
  const accounts = await getAccounts();
  // eslint-disable-next-line eqeqeq
  return accounts.filter((account) => id == account.id);
};
