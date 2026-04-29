# ReactCV

Портфолио на React с маршрутизацией и тёмной темой.

## Что сделано

- Страницы `Home`, `Projects`, `Project` и `Contacts`
- Переключение светлой/тёмной темы
- Сохранение темы в `localStorage`
- Обработка неизвестных маршрутов через `NotFound`
- Убраны артефакты сборки из индекса Git

## Установка

```bash
npm install
```

## Запуск

```bash
npm start
```

Открой `http://localhost:3000`.

## Сборка

```bash
npm run build
```

## Структура проекта

- `src/App.js` — маршрутизация
- `src/components/Theme/ThemeContext.js` — провайдер темы
- `src/utils/useLocalStorage.js` — безопасный localStorage-хук
- `src/pages/NotFound.js` — 404-страница

## Примечания

Папка `build/` является артефактом сборки и не должна храниться в репозитории.
