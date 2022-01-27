import { hyperStyled } from "@macrostrat/hyper";
import styles from "./btn.module.scss";

const h = hyperStyled(styles);

interface Btn {
  label: string;
}

function Button(props: Btn) {
  return h("button.btn", [props.label]);
}

export { Button };
