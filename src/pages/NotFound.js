import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main style={{ padding: '4rem 1rem', textAlign: 'center' }}>
      <h1>Страница не найдена</h1>
      <p>Похоже, такой страницы не существует.</p>
      <Link to="/" style={{ color: '#EA5600', textDecoration: 'none' }}>
        Вернуться на главную
      </Link>
    </main>
  );
}
