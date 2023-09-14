import { styled } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  height: 50px;
`
export const Group = styled.div`
  flex: 1;
  display: flex;
  border: 1px solid #e8eff5;
  border-radius: 3px;
  &:last-child {
    flex: 0.4;
    max-width: 200px;
  }
`
export const InputField = styled.input``
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
  & > input,
  select {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: flex-end;
    padding: 10px;
    font-size: 12px;
    color: #000;
    opacity: 0;
    border: 0;
  }
  .text-value {
    pointer-events: none;
    position: absolute;
    bottom: 10px;
    left: 15px;
    right: 10px;
    font-size: 12px;
    color: #022b54;
    span {
      opacity: 0.3;
    }
    &.type-select::after {
      content: ' ';
      position: absolute;
      right: 0;
      bottom: 0;
      width: 16px;
      height: 16px;
      background: center no-repeat;
      background-image: url(/icons/arrow-bottom.svg);
      opacity: 0.3;
    }
  }
`
