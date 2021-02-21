import { Warning } from '@material-ui/icons';
import React from 'react';
import { isEmptyOrSpaces } from '../components/Utils';
import './styles/oak-text.scss';

interface Props {
  label?: string;
  id: string;
  data: any;
  errorData?: any;
  type?: string;
  handleChange: any;
  errorFields?: any;
  disabled?: boolean;
  rows?: number;
  multiline?: boolean;
  handleFocus?: Function;
  placeholder?: string;
  subtitle?: string;
}
const OakText = (props: Props) => {
  const handleFocus = () => {
    if (props.handleFocus) {
      props.handleFocus();
    }
  };
  return (
    <div className="oak-text">
      {!props.multiline && (
        <input
          disabled={props.disabled}
          autoComplete="off"
          className={
            (props.errorFields && props.errorFields[props.id] ? 'error' : '') +
            (props.disabled ? ' disabled' : '')
          }
          type={props.type ? props.type : 'text'}
          name={props.id}
          id={props.id}
          value={props.data[props.id]}
          onChange={props.handleChange}
          onFocus={handleFocus}
        />
      )}
      {props.multiline && (
        <textarea
          disabled={props.disabled}
          className={
            (props.errorFields && props.errorFields[props.id] ? 'error' : '') +
            (props.disabled ? ' disabled' : '')
          }
          id={props.id}
          name={props.id}
          value={props.data[props.id]}
          onChange={props.handleChange}
        />
      )}
      <label
        htmlFor={props.id}
        className={!isEmptyOrSpaces(props.data[props.id]) ? 'active' : ''}
      >
        {props.label}
      </label>
      {props.subtitle && <div className="typography-3">{props.subtitle}</div>}
      {props.errorData && props.errorData[props.id] && (
        <div className="text-field-error">
          <Warning />
          {props.errorData[props.id]}
        </div>
      )}
    </div>
  );
};

export default OakText;