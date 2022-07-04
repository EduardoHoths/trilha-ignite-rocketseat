import { Container, Header, Transaction } from "./styles";
import { useTransactions } from "../../hooks/useTransactions";
import { useState } from "react";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export const TransactionsTable = () => {
  const { transactions } = useTransactions();
  const [width, setWidth] = useState(window.innerWidth);

  window.onresize = () => {
    setWidth(window.innerWidth);
  };

  return (
    <Container>
      {width > 600 ? (
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.title}</td>
                  <td className={transaction.type}>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(transaction.amount)}
                  </td>
                  <td>{transaction.category}</td>
                  <td>{format(new Date(transaction.createdAt), "dd/LL/yyyy", { locale: ptBR })}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <div>
          <Header>
            <strong>Listagem</strong>
            <span>{transactions.length} itens</span>
          </Header>

          {transactions.map((transaction) => {
            return (
              <Transaction key={transaction.id}>
                <header>
                  <span>{transaction.title}</span>
                  <strong className={transaction.type}>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(transaction.amount)}
                  </strong>
                </header>

                <footer>
                  <span>{transaction.category}</span>
                  <span>
                    {format(new Date(transaction.createdAt), "dd/LL/yyyy", { locale: ptBR })}
                  </span>
                </footer>
              </Transaction>
            );
          })}
        </div>
      )}
    </Container>
  );
};
