import { Action } from './action';

export function Actions({ phoneNumber, updateCallStatus, callStatus }) {
  return (
    <div className="actions">
      <span className="number">{phoneNumber.number}</span>

      <Action
        updateCallStatus={updateCallStatus}
        isActive={phoneNumber.number?.length === 9}
        allDigits={phoneNumber.number?.length === 9 ? 'active' : ''}
        displayed={callStatus ? 'none' : ''}
        actionClass="call"
      >
        {/* {phoneNumber.isCallActive? 'Hang' : 'Call'} */}
        Call
      </Action>
      <Action
        isActive={phoneNumber.number?.length === 9}
        updateCallStatus={updateCallStatus}
        actionClass="hang active"
        displayed={!callStatus ? 'none' : ''}
      >
        Hang
      </Action>
    </div>
  );
}
