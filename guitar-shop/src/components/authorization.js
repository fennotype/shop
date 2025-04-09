import React from 'react';

const Authorization = () => {
    return (
        <body className="authorization">
        <div className="authorization-form">
            <h1>Авторизация</h1>
            <form action="/dashboard" method="POST">
                <input type="text" name="username" placeholder="Имя пользователя" required />
                <input type="password" name="password" placeholder="Пароль" required />
                <button type="submit">Войти</button>
            </form>
            <p>Нет аккаунта? <a href="/registration">Зарегистрироваться</a></p>
        </div>
        </body>
    );
};

export default Authorization;