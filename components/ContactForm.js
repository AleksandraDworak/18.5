var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },
    render: function() {
        return (React.createElement('form', {
            className: 'contactForm'
        }, React.createElement('input', {
            type: 'text',
            placeholder: 'imię',
            value: this.props.contact.firstName
        }), React.createElement('input', {
            type: 'text',
            placeholder: 'nazwisko',
            value: this.props.contact.lastName
        }), React.createElement('input', {
            type: 'email',
            placeholder: 'e-mail',
            value: this.props.contact.email
        }), React.createElement('button', {
            type: 'submit'
        }, 'Dodaj kontakt')))
    }
})