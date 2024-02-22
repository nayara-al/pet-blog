import { HTMLAttributes } from "react";
import styles from "./StructurePage.module.css"

interface StructurePageProps extends HTMLAttributes<HTMLDivElement> {}
export default function StructurePage({ ...props }: StructurePageProps) {
  return <main className={styles.main}>{props.children}</main>;
}
