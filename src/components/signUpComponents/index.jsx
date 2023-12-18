
import React from "react";
import {useForm} from "react-hook-form";
import styles from "./styles.module.scss"
import Chekbox from "../chekbox";
import {App} from "antd";
const SignUpComponents=(props)=>{
    const {
        register,
        handleSubmit,
        formState:{
        errors
    },
    }=useForm()
    const {
    label,
    }=props

    return(
        <div>
            <form className={styles['container']}
                onSubmit={handleSubmit(data => (
                    console.log(data)
                ))}
            >
                <label >
                    <h1 className={styles['title']}>Full Name</h1>
                    <input className={styles['input']} {...register("FullName",{
                        required:"This field is required for ignition",
                        maxLength:{
                            value:4,
                            message:"ee"
                        }
                    })}/>
                    <p className={styles['error']}>{errors.FullName?.message}</p>
                </label>
                <label >
                    <h1 className={styles['title']}>EmailAddress</h1>
                    <input className={styles['input']}{...register("EmailAddress",{
                                required:"This field is required for ignition",
                                maxLength:{
                                    value:4,
                                    message:"error"
                                }
                          })}/>
                    <p className={styles['error']}>{errors.EmailAddress?.message}</p>
                </label>
                <label >
                    <h1 className={styles['title']}>Password</h1>
                    <input className={styles['input']}{...register("Password",{
                        required:"Choose security password",
                        maxLength:{
                            value:4,
                            message:"error"
                        }
                    })}/>
                    <p className={styles['error']}>{errors.Password?.message}</p>
                </label>
                <label >
                    <h1  className={styles['title']}>Confirm Password</h1>
                    <input className={styles['input']}{...register("passwordConfrim",{
                        required:"passwords don't match",
                        maxLength:{
                            value:4,
                            message:"error"
                        }
                    })}/>
                   <p className={styles['error']}>{errors.passwordConfrim?.message}</p>
                </label>
                <Chekbox text="I have read and agree to the" link="Terms of Service"/>
                <button type="submit"  className={styles['button']}>Get Started</button>
            </form>
        </div>
    )
}
export default SignUpComponents