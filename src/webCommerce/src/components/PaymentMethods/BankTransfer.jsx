import { useState } from 'react';
import Loader from '../Loader';
import PropTypes from 'prop-types';
import BankField from '../PaymentMethods/BankTransfer/BankField'
import AccountInput from '../PaymentMethods/BankTransfer/AccountInput';
import AccountDigitInput from '../PaymentMethods/BankTransfer/AccountDigitInput';
import AgencyInput from '../PaymentMethods/BankTransfer/AgencyInput';
import CPFInput from '../PaymentMethods/BankTransfer/CPFInput';
import NameInput from '../PaymentMethods/BankTransfer/NameInput';
import TermsCheckbox from '../PaymentMethods/BankTransfer/TermsCheckbox';

function BankTransfer({ onButtonClick, isLoading }) {
  const [bank, setBank] = useState('');
  const [account, setAccount] = useState('');
  const [accountDigit, setAccountDigit] = useState('');
  const [agency, setAgency] = useState('');
  const [cpf, setCpf] = useState('');
  const [name, setName] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleButtonClick = (event) => {
    event.preventDefault();
    if (bank && account && accountDigit && agency && cpf && name && termsAccepted) {
      onButtonClick();
    } else {
      alert('Por favor, preencha todos os campos e aceite os termos e condições.');
    }
  };

  return (
    <div>
      <form className='relative -mx-4 flex flex-col py-4 px-2'>
        <div className='pb-4 flex flex-col items-center justify-center'>
          <div>
            <p className='buynow-card-text-sm'>
              Autorização para Débito Automático.
            </p>
          </div>
        </div>
        <BankField value={bank} onChange={(e) => setBank(e.target.value)} />
        <div className='flex mt-1.5'>
          <AccountInput value={account} onChange={setAccount} />
          <AccountDigitInput value={accountDigit} onChange={setAccountDigit} />
          <AgencyInput value={agency} onChange={setAgency} />
        </div>
        <CPFInput value={cpf} onChange={setCpf} />
        <NameInput value={name} onChange={setName} />
        <TermsCheckbox checked={termsAccepted} onChange={(e) => setTermsAccepted(e.target.checked)} />
      </form>
      <div className="flex justify-center mt-8">
        {isLoading ? (
          <Loader />
        ) : (
          <button
            onClick={handleButtonClick}
            className={`btn-buynow-popular w-11/12 ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Autorizar
          </button>
        )}
      </div>
    </div>
  );
}

BankTransfer.propTypes = {
  onButtonClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default BankTransfer;