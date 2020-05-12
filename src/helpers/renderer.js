import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import Routes from '../client/Routes'

export default function (req) {
  const content = renderToString(
    <StaticRouter location={req.path}>
      <Routes />
    </StaticRouter>
  )

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap"
      rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="main.css"/>
      <title>Dharma Initiative</title>
    </head>
    <body>
      <div id="root">${content}</div>
      <script src="bundle.js"></script>
    </body>
    </html>
  `
}
