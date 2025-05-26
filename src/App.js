import CreateCustomer from './features/customers/CreateCustomer';
import Customer from './features/customers/Customer';
import AccountOperations from './features/accounts/AccountOperations';
import BalanceDisplay from './features/accounts/BalanceDisplay';
import { useSelector } from 'react-redux';
import React from 'react';

function App() {
  const fullName = useSelector((state) => state.customer.fullName);

  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>

      {fullName === '' ? (
        <CreateCustomer />
      ) : (
        <React.Fragment>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </React.Fragment>
      )}
    </div>
  );
}

export default App;
