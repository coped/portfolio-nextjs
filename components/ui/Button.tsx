import type { MouseEventHandler, ReactElement } from "react";

export type Props = {
  text?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};
export default function Button({ text, onClick }: Props): ReactElement {
  return (
    <div>
      <button onClick={onClick}>{text}</button>
    </div>
  );
}
