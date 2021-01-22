import React from "react"
import ReactDOM from "react-dom"

import MarkdownComponent from "./example.md"

function App() {
	return (
		<div>
			<h1>
				Hello, world rendered by <code>React</code>!
			</h1>
			<MarkdownComponent />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById("root"))
