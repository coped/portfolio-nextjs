import type { ReactElement } from "react";

export type Props = { text?: string };
export default function Button({ text }: Props): ReactElement {
  return (
    <div>
      <button>{text}</button>
    </div>
  );
}
