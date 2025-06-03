import React from "react";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <h1>Добро пожаловать в личный кабинет!</h1>
      <div className="user-actions" style={{ marginTop: "30px", display: "flex", flexDirection: "column", gap: "16px", maxWidth: "300px", marginLeft: "auto", marginRight: "auto" }}>
        <button onClick={() => alert('Просмотреть профиль')}>Профиль</button>
        <button onClick={() => alert('Изменить данные')}>Редактировать профиль</button>
        <button onClick={() => alert('Мои заказы')}>Мои заказы</button>
        <button onClick={() => alert('Избранное')}>Избранное</button>
        <button onClick={() => alert('Выйти из аккаунта')}>Выйти</button>
      </div>
    </div>
  );
}