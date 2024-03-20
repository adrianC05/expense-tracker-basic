import { useGlobalState } from "../context/GlobalState";

function Balance() {
  const { transactions } = useGlobalState();

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0);
  return (
    <div className="text-center pb-8">
      <h3>Tu Balance</h3>
      <h1 className="text-xl">${total}</h1>
    </div>
  );
}

export default Balance;
