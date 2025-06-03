import React from "react";

export default function DashboardAdmin() {
  return (
    <div className="dashboardAdmin">
      <h1>Добро пожаловать в личный кабинет Администратора!</h1>
      <div className="admin-actions" style={{ marginTop: "30px" }}>
        <button onClick={() => alert('Добавить товар')}>Добавить товар</button>
        <button onClick={() => alert('Редактировать товар')}>Редактировать товар</button>
        <button onClick={() => alert('Удалить товар')}>Удалить товар</button>
        <button onClick={() => alert('Просмотр заказов пользователей')}>Просмотр заказов</button>
      </div>
    </div>
  );
}