import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransactions } from "../../hooks/useTransactions";
import { useEffect, useState } from "react";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

export const Summary = () => {
  const { transactions } = useTransactions();
  const [lastIncome, setLastIncome] = useState("");
  const [lastOutcome, setLastOutcome] = useState("");
  const [firstTransaction, setFirstTransaction] = useState("");
  const [lastTransaction, setLastTransaction] = useState("");

  useEffect(() => {
    if (transactions.length === 0) {
      return;
    }
    const income = transactions.filter(
      (transaction) => transaction.type === "deposit" && transaction.createdAt
    )[0];
    const outcome = transactions.filter((transaction) => transaction.type === "withdraw")[0];

    setLastIncome(income.createdAt);
    setLastOutcome(outcome.createdAt);

    setFirstTransaction(transactions[transactions.length - 1].createdAt);
    setLastTransaction(transactions[0].createdAt);

  }, [[], transactions]);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          Entradas
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
            summary.deposits
          )}
        </strong>
        {lastIncome !== "" && (
          <span>
            Última entrada dia {format(new Date(lastIncome), "dd 'de' LLLL", { locale: ptBR })}
          </span>
        )}
      </div>
      <div>
        <header>
          Saídas
          <img src={outcomeImg} alt="Entradas" />
        </header>
        <strong>
          -
          {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
            summary.withdraws
          )}
        </strong>
        {lastOutcome !== "" && (
          <span>
            Última saída dia {format(new Date(lastOutcome), "dd 'de' LLLL", { locale: ptBR })}
          </span>
        )}
      </div>
      <div>
        <header>
          Total
          <img src={totalImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
            summary.total
          )}
        </strong>
        {transactions.length > 0 && (
          <span>
            {firstTransaction !== "" &&
              format(new Date(firstTransaction), "dd 'de' LLLL", { locale: ptBR })}{" "}
            à{" "}
            {lastTransaction !== "" &&
              format(new Date(lastTransaction), "dd 'de' LLLL", { locale: ptBR })}
          </span>
        )}
      </div>
    </Container>
  );
};
