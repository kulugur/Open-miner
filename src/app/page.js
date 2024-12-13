import Image from "next/image";
import styles from "./page.module.css";
import Heder from "./component/heder/heder"
import Main_content from "./component/main_content/main_content";
import Main_img from "./component/main_img/main_img";
import Futer from "./component/futer/futer";


export default function Home() {
  return (
   <><Heder/>
    <Main_content/>
    <Main_img/>
    <Futer/>
   </>
  );
}
