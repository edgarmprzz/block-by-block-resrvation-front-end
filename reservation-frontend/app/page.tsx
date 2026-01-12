// app/page.tsx
export default function HomePage() {
  return (
    <div className="text-center">
      <h1 className="mb-3">Welcome to Reservations</h1>
      <p className="text-muted">
        This page is rendered inside layout.tsx using Bootstrap and globals.css
      </p>

      <button className="btn btn-primary">
        Browse Events
      </button>
    </div>
  );
}
