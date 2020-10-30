import Layout from '../components/layout'

export default function Home() {
  return (
    <Layout>
      <div className="container h-100">
        <div className="row align-items-center justify-content-center text-center h-100">
          <div className="col align-self-center">
            <img src="./daniel.jpg?v=1.0" className="rounded-circle img-thumbnail" width="200" />
    
            <h1 className="display-4">Daniel Skogstad</h1>
            <p className="lead">Senior consultant at <a href="https://www.bouvet.no" target="new">Bouvet</a>.</p>
            <p>I'm a senior developer / team lead living in Bergen, Norway.</p>
            <p>I work with React, Angular, Next.JS, Java, C#, .net</p>
    
            <a href="https://www.linkedin.com/in/danielskogstad/" target="new" className="btn btn-dark" role="button">LinkedIn</a>
            <a href="https://www.github.com/danielskogstad" target="new" className="btn btn-dark" role="button">Github</a>
          </div>
        </div>
      </div>
    </Layout>
  )
}
