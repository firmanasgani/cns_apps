import React, {useState } from 'react'
import styles from './Login.module.css'

const Login = ({onLogin }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (username === 'demo' && password === 'password') {
            onLogin(username);
        } else {
            alert('Invalid credentials. Please try again.');
            setPassword('')
        }
    }

    return (
        <>
        <div className={styles.container} >
            <h1>Selamat datang di CNS Apps</h1>
            <h4>Masuk untuk melanjutkan</h4>
            <form className={styles.form} onSubmit={handleSubmit}>
                <label htmlFor='username'>Username: </label>
                <input
                    type='text'
                    id='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type='password'
                    id='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Login</button>
            </form>
        </div>
        </>
    )

}

export default Login