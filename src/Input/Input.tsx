/** @jsx jsx */
import { jsx, css } from '@emotion/core';

type InputProps = {
  /** Input 안의 내용 */
  children: React.ReactNode;
  /** Input을 비활성화 시킵니다. */
  disabled?: boolean;
  /** Input의 너비를 임의로 설정합니다. */
  width?: string | number;
  /** 스타일 커스터마이징 하고싶을 때 사용 */
  className?: string;
  /** Input Field 입력 할 때 마다 */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  /** maxlength */
  maxLength?: number;
};

const Input = ({children, disabled, width, className, onChange, maxLength}: InputProps) => {
  return (
    <label>
      {children}
      <input
        placeholder="placeholder"
        css={[ style, {width} ]}
        className={className}
        disabled={disabled}
        onChange={onChange}
        maxLength={maxLength}
      />
    </label>
  )
}

Input.defaultProps = {
  width: '200px'
};

const style = css`
  outline: none;
  border: 1px solid #ccc;;
  box-sizing: border-box;
  height: 2rem;
  font-size: 0.875rem;
  padding: 0 10px;
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
`;

export default Input;
