# 🎬 Betflix  
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux%20Toolkit-593D88?style=for-the-badge&logo=redux&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green?style=for-the-badge)

**Betflix** — это веб‑приложение, вдохновлённое интерфейсом Netflix.  
Проект разработан на **React + Vite** с использованием **Redux Toolkit**, **RTK Query**, **Material UI**, каруселей и других современных библиотек.  
Он демонстрирует продвинутую архитектуру фронтенда: глобальное состояние, маршрутизацию, асинхронные запросы, фильтрацию и темизацию.

---

## 📸 Превью  
![image alt](https://github.com/Progshokun/Betflix/blob/main/preview.jpg?raw=true)

---

## 🚀 Возможности

- 📺 Просмотр популярных фильмов и сериалов  
- 📝 Детальная страница с описанием и рейтингом  
- 🔍 Поиск по названию  
- 🧭 Фильтрация по жанру, году и стране  
- ⭐ Система рейтингов контента  
- 🌗 Переключение светлой и тёмной темы  
- 🌀 Слайдеры и карусели (React Slick, Acrool Carousel)  
- 📱 Полностью адаптивный дизайн  
- 🌐 Асинхронные запросы к кино‑API с использованием **RTK Query**  
- ⚡️ Мгновенная разработка и сборка через Vite

---

## 🧱 Структура проекта

```
Betflix/
├── public/              # Статические файлы
├── src/
│   ├── assets/          # Изображения, иконки, медиа
│   ├── components/      # Переиспользуемые UI-компоненты
│   ├── pages/           # Страницы (Home, MovieDetails и др.)
│   ├── services/        # RTK Query API-слайсы и другие сервисы
│   ├── hooks/           # Кастомные хуки (если есть)
│   ├── styles/          # Глобальные и модульные стили
│   ├── store/           # Redux store и слайсы
│   ├── App.jsx          # Главный компонент приложения
│   └── main.jsx         # Точка входа
├── vite.config.js
├── package.json
└── README.md
```

---

## 🧰 Используемые технологии

| Технология                          | Назначение |
|-------------------------------------|------------|
| [React](https://react.dev/)         | UI и компонентный подход |
| [Vite](https://vitejs.dev/)         | Быстрая сборка и dev‑сервер |
| [React Router](https://reactrouter.com/) | Маршрутизация между страницами |
| [Redux Toolkit](https://redux-toolkit.js.org/) | Глобальное состояние и слайсы |
| [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) | Асинхронные запросы к API |
| [React Redux](https://react-redux.js.org/) | Связка Redux с React |
| [MUI (Material UI)](https://mui.com/) + Emotion | Готовые UI‑компоненты и стилизация |
| [React Slick](https://react-slick.neostack.com/) + [Slick Carousel](https://kenwheeler.github.io/slick/) | Слайдеры и карусели |
| [@acrool/react-carousel](https://www.npmjs.com/package/@acrool/react-carousel) | Дополнительные UI‑слайдеры |
| ESLint + Prettier | Статический анализ и автоформатирование кода |

---

## ⚙ Установка и запуск

```bash
# 1. Клонировать репозиторий
git clone https://github.com/Progshokun/Betflix.git

# 2. Перейти в папку проекта
cd Betflix

# 3. Установить зависимости
npm install

# 4. Запустить dev-сервер
npm run dev
```

После этого проект будет доступен по адресу [http://localhost:5173](http://localhost:5173) (или другом порту, указанном Vite).

---

## 📝 Планы развития

- 🔐 Авторизация и профили пользователей  
- ❤️ Избранное / “Мой список”  
- 💬 Комментарии пользователей  
- 📊 Персональные рекомендации  
- 🪄 Дополнительные анимации и переходы

---

## 📝 Лицензия

Проект распространяется под лицензией **MIT**.  
Вы можете свободно использовать и модифицировать его для обучения или собственных целей.

---

## 👤 Автор

**Progshokun**  
[GitHub](https://github.com/Progshokun)

---

📌 *Проект создан в образовательных целях. Не является коммерческим сервисом Netflix.*
