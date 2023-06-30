import styled from "styled-components";

import { Form as FormikForm, Field as FormikInput } from "formik";

export const Form = styled(FormikForm)`
  background-color: #cccccc;
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  padding: 5px 5px;
  font-size: large;
`;

export const FormLabel = styled.label`
  text-align: center;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
`;
export const Field = styled(FormikInput)`
  height: 30px;
  margin: 0 auto;
  width: 300px;
  outline: none;
  border: 1px solid #7a7a7a;
  border-radius: 0;
  font-size: medium;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
  :active,
  :focus {
    border: 1px solid #999999;
  }
`;

export const FormLabelImage = styled.label`
  background-color: #ffed10;
  border-radius: 12px;
  color: #000;
  cursor: pointer;
  padding: 10px 15px;
  text-align: center;
  transition: 200ms;
  align-self: center;
  width: fit-content;
  height: 40px;
  box-sizing: border-box;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :not(:disabled):hover,
  :not(:disabled):focus {
    outline: 0;
    background: #f4e603;
    box-shadow: 0 0 0 2px rgba(226, 0, 37, 0.2),
      0 3px 8px 0 rgba(226, 0, 37, 0.15);
  }

  :disabled {
    filter: saturate(0.2) opacity(0.5);
    -webkit-filter: saturate(0.2) opacity(0.5);
    cursor: not-allowed;
  }
`;

export const SubmitButton = styled.button`
  background-color: #ffed10;
  border-radius: 12px;
  color: #000;
  cursor: pointer;
  font-weight: bold;
  padding: 10px 15px;
  text-align: center;
  transition: 200ms;
  width: fit-content;
  height: 40px;
  box-sizing: border-box;
  border: 0;
  font-size: 16px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :not(:disabled):hover,
  :not(:disabled):focus {
    outline: 0;
    background: #f4e603;
    box-shadow: 0 0 0 2px rgba(226, 0, 37, 0.2),
      0 3px 8px 0 rgba(226, 0, 37, 0.15);
  }

  :disabled {
    filter: saturate(0.2) opacity(0.5);
    -webkit-filter: saturate(0.2) opacity(0.5);
    cursor: not-allowed;
  }
`;
