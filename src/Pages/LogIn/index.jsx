import ImgComponent from "../../components/imgComponent";
import TitleComponent from "../../components/titleComponent";
import GoogleComponent from "../../components/googleComponent";
import styles from "./styles.module.scss"
import InputComponent from "../../components/inputComponent";
import LinkComponent from "../../components/linkComponent";

const LogIn=()=>{
    return(
        <div className={styles['bigcontainer']}>
            <div className={styles['container-logIn']}>
                <ImgComponent/>
                <TitleComponent
                    title="Log in your Account"
                    text="Welcome back , please enter your detalis"
                />
                <GoogleComponent/>
                <InputComponent/>
                <LinkComponent title="Don`t have an account " to="/signin" link="Sign ap"/>
            </div>
        </div>
    )
}
export default LogIn
