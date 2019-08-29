import React from "react"
import { Helmet } from "react-helmet"

// export default () => (
//     <Helmet>
//         <meta charSet="utf-8" />
//         <title>The Frustrated Dev</title>
//         <html lang="pt-BR" />
//         <meta name="description" content="Uma forma de fixar o meu conhecimento e ajudar a outros que estão 
//         entrando nessa carrerira de desenvolvedor e se sente tão frustrado quanto eu." />
//         <meta name="keywords" content="dev, web, html, css, js, javascript, react, framework, beginner, olivmarcos" />
//         <meta name="robots" content="index, follow" />
//         <meta name="language" content="PT" />
//     </Helmet>
// )

class Application extends React.Component {
  render() {
    return (
    <div className="application">
        <Helmet>
            <meta charSet="utf-8" />
            <title>My Title</title>
            <html lang="pt-BR" />
            <meta name="description" content="Uma forma de fixar o meu conhecimento e ajudar a outros que estão 
            entrando nessa carrerira de desenvolvedor e se sente tão frustrado quanto eu." />
            <meta name="keywords" content="dev, web, html, css, js, javascript, react, framework, beginner, olivmarcos" />
            <meta name="robots" content="index, follow" />
            <meta name="language" content="PT" />
            <link rel="canonical" href="https://olivmarcos.netlify.com/" />
        </Helmet>
    </div>
    )
  }
}

export default Application;