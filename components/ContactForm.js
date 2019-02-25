ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
        
    },
    render: function() {
        return (

            <form className='contactForm'>
                <input type='text' placeholder='imię' value={this.props.contact.firstName}/>
                <input type='text' placeholder='nazwisko' value={this.props.contact.lastName}/>
                <input type='email' placeholder='e-mail' value={this.props.contact.email}/> 
                <input type='submit' value='Dodaj kontakt' />
            </form>
        );
    }
})