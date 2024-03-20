import { useGlobalState } from "../../context/GlobalState";

function TransactionList() {
  const { transactions, deleteTransaction } = useGlobalState();
  return (
    <div className="pt-8">
        <div  className="flex">
          <table className="table-auto w-full text-center">
            <thead>
              <tr>
                <th>Descripción</th>
                <th>Cantidad</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
             {transactions.map((transaction, key) => {
                return (
                    <tr key={key}>
                        <td>{transaction.description}</td>
                        <td>${transaction.amount}</td>
                        <td>
                        <button
                            onClick={() => deleteTransaction(transaction.id)}
                            className="bg-red-500 text-white px-4 py-1 rounded-md mb-3"
                        >
                            Eliminar
                        </button>
                        </td>
                    </tr>
                    );
                }
            )}
             
            </tbody>
          </table>
        </div>
    </div>
  );
}

export default TransactionList;
