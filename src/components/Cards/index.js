import React from "react";
import "./styles.css";
import Button from "../Button";
import { Row, Card } from "antd";
function Cards({
  income,
  expense,
  totalBalance,
  showExpenseModal,
  showIncomeModal,
}) {
  return (
    <div>
      <Row className="my-row">
        <Card className="my-card" bordered={true}>
          <h2>Current Balance</h2>
          <p>₹{totalBalance}</p>
          <Button text="Reset Balance" blue={true} />
        </Card>
        <Card className="my-card" bordered={true}>
          <h2>Total Income</h2>
          <p>₹{income}</p>
          <Button text="Add Income" blue={true} onClick={showIncomeModal} />
        </Card>
        <Card className="my-card" bordered={true}>
          <h2>Total Expenses</h2>
          <p>₹{expense}</p>
          <Button text="Add Expense" blue={true} onClick={showExpenseModal} />
        </Card>
      </Row>
    </div>
  );
}

export default Cards;
