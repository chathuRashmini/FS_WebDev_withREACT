import React, { Component } from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'

export default class DishdetailComponent  extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <div className='col-12 col-md-5 m-1'>
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{ dish.name }</CardTitle>
                            <CardText>{ dish.description }</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        else {
            <div></div>
        }
    }

    renderComments(comments) {
        if (comments != null) {
            const allComments = comments.map(comment => {
            return (
                <li key = { comment.id } >
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                        &nbsp;
                        {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                    </p>
                </li>
            )
        })
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {allComments}
                </ul>
            </div>
        )
        }
        else {
            <div></div>
        }
        
    }

    render() {
        const dish = this.props.dish;

        const selectedDish = this.renderDish(dish);
        const commentSet = this.renderComments(dish.comments);

        return (
            <div className="row">
                { selectedDish }
                { commentSet }
            </div>
        )
    }
}