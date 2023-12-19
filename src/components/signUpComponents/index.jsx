import React, {useState} from "react";
import {useForm} from "react-hook-form";
import *as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import styles from "./styles.module.scss"
import { Checkbox } from 'antd';

const SignUpComponents=()=>{
    const [showPassword, setShowPassword] = useState(false);

    const schema=yup.object().shape({
        fullName:yup.string().required().min(4,"email is too short ").max(10,"email is too long"),
        password:yup.string().required().min(4,"too short ").max(10,"too long password"),
        EmailAddress:yup.string().required().min(4,"email is too short ").max(10,"email is too long"),
        passwordConfrim:yup.string().required().min(4,"too short ").max(10,"too long password"),
    })

    const {
        register,
        handleSubmit,
        formState:{
            errors
        }
    }=useForm({
        resolver:yupResolver(schema),
    })


    const Onsubmit=(data)=>{
        console.log(data)
    }

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };
    return(
        <div>
            <form onSubmit={handleSubmit(Onsubmit)} className={styles['form-container']}>

                <p className={styles['label']} style={{color:errors.fullName&&"red"}}>Email Address</p>
                <input
                    className={styles['emailaddres']}
                    type="text"
                    placeholder="fullName"
                    {...register("fullName")}
                    style={{ borderColor: errors.fullName && "red" }}
                />
                <p className={styles['error']}>{errors.fullName?.message}</p>


                <p className={styles['label']} style={{color:errors.EmailAddress&&"red"}}>Email Address</p>
                <input
                    className={styles['emailaddres']}
                    type="text"
                    placeholder="emailaddres"
                    {...register("EmailAddress")}
                    style={{ borderColor: errors.EmailAddress && "red" }}
                />
                <p className={styles['error']}>{errors.EmailAddress?.message}</p>


                <div style={{ position: "relative" }}>
                    <p className={styles['label']} style={{color:errors.password&&"red"}}>Password</p>
                    <input
                        className={styles['password']}
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        {...register("password")}
                        style={{ borderColor: errors.password && "red" }}
                    />
                    <span
                        className={styles['icon-yea']}
                        onClick={togglePasswordVisibility}
                    >
                     {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>

                <p className={styles['error']}>{errors.password?.message}</p>

                <div style={{ position: "relative" }}>
                    <p className={styles['label']} style={{color:errors.password&&"red"}}>Password</p>
                    <input
                        className={styles['password']}
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        {...register("passwordConfrim")}
                        style={{ borderColor: errors.passwordConfrim && "red" }}
                    />
                    <span
                        className={styles['icon-yea']}
                        onClick={togglePasswordVisibility}
                    >
                     {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                </div>

                <p className={styles['error']}>{errors.passwordConfrim?.message}</p>

                <div className={styles.box}>
                    <Checkbox ></Checkbox>
                    <a  className={styles['remeber']}>Remember mi</a>
                    <p className={styles['Forgat']}>Forgat Password</p>
                </div>
                <button className={styles['button']} type="submit">Sign ap</button>
            </form>
        </div>
    )
}
export default SignUpComponents