export default function PageHead({ title, children }) {
  return (
    <section className="page-head">
      <div className="container">
        <h1>{title}</h1>
        {children && <p className="lead">{children}</p>}
      </div>
    </section>
  )
}
