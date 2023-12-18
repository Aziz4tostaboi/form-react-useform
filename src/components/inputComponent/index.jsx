import React from "react";
import {useForm} from "react-hook-form";
import styles from "./styles.module.scss"
import Chekbox from "../chekbox";
const InputComponent=(props)=>{
    const {
        register,
        handleSubmit,
        formState:{errors},
    }=useForm()
    const {
        EmailAddress,
        password,
    }=props
    return(
        <div className={styles['container']}>
            <form onSubmit={handleSubmit((data)=>{
                console.log(data)

            } ) } className={styles.container}>
                <p className={styles['title']}>
                    {EmailAddress}
                </p>
                <label className={styles.label}>
                    <input className={styles.EmailAddress}
                           {...register("EmailAddress",
                               {
                                   required:"This field is required",
                                   minLength:{
                                       value:5,
                                       message:"Error",
                                   },

                               })}
                           placeholder="EmailAddress"
                    />
                </label>
                <p className={styles['error']}>{errors.EmailAddress?.message}</p>
                  <p className={styles['title']}>{password}</p>
                <div className={styles.passwordbloc}>
                    <label className={styles.label}>

                        <input className={styles.password}
                            {...register("password",{
                                required:"This field is required",
                                minLength:{
                                    value:5,
                                    message:"ERROR"
                                },
                                maxLength:{
                                    value:10,
                                    message:"long password"
                                }
                            })}
                            placeholder="password"
                        />
                    </label>
                </div>
                <p className={styles['error']}>{errors.password?.message}</p>
                <Chekbox text="Remember mi" title="Forogr Password ?"/>
                <button  className={styles['Add']} type="submit">Log in </button>
            </form>
        </div>
    )
}
export default InputComponent