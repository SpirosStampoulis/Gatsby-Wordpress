
import React from "react"
import { Card, Button } from "react-bootstrap"
import {Link} from "gatsby"

const Post = props => (
  <post className="p-3">
    <Card>
      <Card.Img variant="top" alt={props.alt || "default"} src={props.image} />
      <Card.Body>
        <Card.Title dangerouslySetInnerHTML={{ __html: props.title }} />
        <Card.Text>
          <div dangerouslySetInnerHTML={{ __html: props.excerpt }} />
        </Card.Text>
        <Link to={props.readMore}>
            <Button variant="warning">
            Read More...
            </Button>
        </Link>
      </Card.Body>
    </Card>
  </post>
)

export default Post