

# react-mesto-api-full
Репозиторий для приложения проекта "Mesto", включающий фронтенд и бэкенд части приложения со следующими возможностями: авторизации и регистрации пользователей, операции с карточками и пользователями. 

###  Описание ![](https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg)
Бэкенд расположен в директории `backend/`,   
а фронтенд - в `frontend/`. 
### Структура и функционал фронтенда ![](https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg)
1. Сайт состоит из нескольких страниц:

```/ ``` - главная страница. Содержит информацию о выполненном проекте.

```/movies ``` - страница с фильмами. На ней есть форма поиска фильмов и блок с результатами поиска.

```/saved-movies ``` - страница с сохранёнными фильмами. Показывает фильмы, сохранённые пользователем.

```/signup ``` - страница регистрации. Позволяет пользователю зарегистрировать аккаунт.

```/signin ``` - страница авторизации. На ней пользователь может войти в систему.

```/profile ```— страница редактирования профиля. Пользователь может изменить данные своего аккаунта.

2. Функционал:

* регистрация и авторизация пользователей
* сохранение/удаление фильмов в личном кабинете;
* редактирование личных данных
* обработка запросов на внешние API
### Функционал бэкенда ![](https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg)
* получение списка карточек
* получение списка пользователей
* получение данных пользователя по id
* получение данных текущего авторизованного пользователя
* регистрация нового пользователя
* авторизация пользователя
* выдача jwt
* запрос на изменение авторизованного пользователя
* добавление новой карточки
* удаление карточек авторизованного пользователя
* установка и снятие лайка на карточках
### Технологии ![](https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg)
* React (компоненты, хуки, контекст, роутер, собственный хук для валидации форм, использование HOC)
* HTML
* CSS (адаптивная верстка)
* Методология БЭМ Nested
* JavaScript
* Работа с fetch запросами
* Node.js
* Express
* MongoDB
* Mongoose
* Celebrate
* Joi
### Системные требования ![](https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg)
Для запуска потребуется Node.js версии 6.14
### Ссылки ![](https://cdn.jsdelivr.net/gh/Readme-Workflows/Readme-Icons@main/icons/octicons/ApprovedChanges.svg)

[на репозиторий с бэкендом и фронтендом проекта "Mesto"](https://github.com/Natali-Vorobeva/movies-explorer-api)
