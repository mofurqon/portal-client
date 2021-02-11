import React, { useContext, useState } from 'react';
import Button from '../../shared/components/FomElements/Button';
import Input from '../../shared/components/FomElements/Input';
import { AuthContext } from '../../shared/context/auth-context';
import { useForm } from '../../shared/hooks/form-hook';
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/utils/validator';

import './Auth.css';

const Auth = () => {
    const auth = useContext(AuthContext);
    const [isLogin, setInLogin] = useState(true);

    const [ formState, inputhandler, setFormData ] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    }, false);

    const switchModeHandler = () => {
        if (!isLogin) {
            setFormData ({
                ...formState.inputs,
                name: undefined
            }, 
                formState.inputs.email.isValid && formState.inputs.password.isValid
            );
        } else {
            setFormData ({
                ...formState.inputs,
                name: {
                    value: '',
                    isValid: false
                }
            },
                false
            );
        }

        setInLogin(prevMode => !prevMode);
    };

    const authSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
        auth.login();
    };

    return (
        <React.Fragment>
            <form className="place-form" onSubmit={authSubmitHandler}>
                <div className="auth-form">
                    <h2 className="auth-form__title">{isLogin ? 'Login Required' : 'Register'}</h2>
                </div>
                {!isLogin &&
                    <Input 
                    id="name"
                    element="input" type="text" 
                    label="Full Name" 
                    validators={[VALIDATOR_REQUIRE]} 
                    errorText="Enter a valid name"
                    onInput={inputhandler}
                    />
                }
                <Input 
                id="email"
                element="input" type="email" 
                label="Email" 
                validators={[VALIDATOR_MINLENGTH(5),VALIDATOR_EMAIL]} 
                errorText="Enter a valid email address"
                onInput={inputhandler}
                />
                <Input 
                id="password"
                element="input" 
                type="password"
                label="Password" 
                validators={[VALIDATOR_REQUIRE(4)]} 
                errorText="Enter a strong password"
                onInput={inputhandler}
                />
                <Button type="submit" disabled={!formState.isValid}>{isLogin ? 'Login' : 'Signup'}</Button>
            </form>
            <div className="auth-form__footer">
                <h5>{isLogin ? 'Do not have an account? Sign Up here' : 'Have an account? Login Here'}</h5>
                <Button inverse onClick={switchModeHandler}>{isLogin ? 'SignUp' : 'Login'}</Button>
            </div>
            
        </React.Fragment>
    );
};

export default Auth;