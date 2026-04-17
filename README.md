# 🛡️ SecurityOS: Управление физической безопасностью

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![JSON Server](https://img.shields.io/badge/JSON_Server-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

Одностраничное веб-приложение (SPA) для мониторинга и управления контрольно-пропускными пунктами (КПП) и объектами охраны. Разработано в рамках лабораторной работы по дисциплине «Технологии и методы программирования».

🌍 **Живая демо-версия:** [spa-security.vercel.app](https://spa-security.vercel.app)

> **🔐 Тестовые данные для входа:**
> * **Логин:** `xadmin`
> * **Пароль:** `xservice54`

---

## ✨ Ключевой функционал

* **Система авторизации:** Защищенные маршруты (Protected Routes), доступ к панели управления только после входа.
* **Полный CRUD:** Создание, чтение, обновление и удаление объектов (КПП).
* **Умный поиск:** Мгновенная фильтрация списка по названию объекта.
* **Фильтрация по статусам:** Сортировка объектов по их текущему состоянию (*Активен / На ремонте / Отключен*).
* **Современный UI/UX:** Индикаторы загрузки, обработка ошибок сервера, адаптивный дизайн (CSS).
* **Облачный API:** Данные хранятся и обрабатываются на удаленном сервере (Render).

---

## 🛠️ Стек технологий

* **Frontend:** React.js, React Router DOM v6, Axios
* **Backend (Mock API):** Node.js, JSON Server
* **Хостинг:** Vercel (фронтенд), Render.com (бэкенд)

---

## 💻 Локальный запуск (для разработчиков)

Если вы хотите запустить проект на своем компьютере:

1. **Клонируйте репозиторий:**
   ```bash
   git clone [https://github.com/skrudje/SPA-Security.git](https://github.com/skrudje/SPA-Security.git)
   ```
2. **Установите зависимости:**
   ```bash
   npm install
   ```
3. **Запустите локальный сервер базы данных:**
   ```bash
   npm run server
   ```
4. Откройте новый терминал и **запустите React-приложение:**
   ```bash
   npm start
   ```

---
*Разработано в 2026 году.*
