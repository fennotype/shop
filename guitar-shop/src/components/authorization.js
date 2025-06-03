    import React from 'react';
    import { Link, useNavigate }  from 'react-router-dom';
        
        export default function Authorization() {
            const navigate = useNavigate();

            
            const handleSubmit = async (e) => {
                e.preventDefault(); 
                const username = e.target.username.value;
                const password = e.target.password.value;

                console.log('handleSubmit сработал');
                console.log('Отправляем:', username, password);

                try {

                    console.log('Отправка данных:', username, password);
                    const response = await fetch('http://localhost:5000/api/authorization', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, password }),
                    });
                
                    const data = await response.json();
                    console.log('Ответ сервера:', data);
                    
                    if (response.ok) {
                    if (data.user && data.user.role === 'admin') {
                    navigate('/dashboardAdmin');
                    } else {
                    navigate('/dashboard');
                    }
                    }  
                    else {
                        console.error('Ошибка авторизации:', data.error);
                        alert(data.error || 'Неверные имя пользователя или пароль'); // изменена и теперь работает
                    }
                } catch (err) {
                    console.error('Ошибка:', err);
                    alert('Произошла ошибка при авторизации');
                }
            };
            return (
                <div className="form">
                    <h1>Авторизация</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="username" placeholder="имя пользователя" required />
                        <input type="password" name="password" placeholder="Пароль" required />
                        <button type="submit" >Войти</button>
                    </form>
                    <p>Нет аккаунта? <Link to = '/registration' >Зарегистрироваться</Link></p>
                </div>
            );
        
        }