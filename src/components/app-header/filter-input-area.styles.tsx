import { styled } from 'styled-components'
import { typography } from '~/styles'

export const InputArea = styled.div`
  position: relative;
  min-width: 120px;
  flex: 1;
  &:not(&:last-child)::after {
    content: ' ';
    position: absolute;
    top: 9px;
    right: 0;
    width: 1px;
    height: 30px;
    background-color: #e8eff5;
  }
  & > label {
    position: absolute;
    top: 8px;
    left: 15px;
    font-size: 11px;
    color: #53c3d0;
  }
  .text-value {
    overflow: hidden;
    pointer-events: none;
    position: absolute;
    bottom: 10px;
    left: 15px;
    right: 25px;
    padding-right: 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    line-height: 1.2;
    color: #022b54;
    background-color: white;
    span {
      opacity: 0.3;
    }
  }
  /* mantine or native inputs */
  & > label + div {
    position: absolute;
    inset: 2px;
    display: flex;
    align-items: flex-end;
    padding: 0;
    cursor: pointer;
    font-size: 12px;
    color: #000;
    border: 0;
    border-radius: 3px;
    input,
    button {
      border-width: 2px;
      border-color: transparent;
      &:hover {
        border-color: #d1eff2;
      }
      &:focus {
        border-color: #a3dfe6;
      }
    }
    .mantine-InputWrapper-root {
      width: 100%;
    }
    .mantine-Input-wrapper {
      opacity: 0.5;
      & > input,
      button {
        ${typography['text-regular']};
        height: 45px;
        padding-top: 13px;
        padding-left: 13px;
        font-size: 13px;
        font-weight: normal;
      }
    }
  }
`
