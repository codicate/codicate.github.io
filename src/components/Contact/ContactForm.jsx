import React from 'react';
import Data from '../../Data';
import Button from '../Utility/Button';
import Input from '../Utility/Input';

class ContactForm extends React.Component {
	render() {
		return (
			/* <form action={Data.contact.formspree} method="POST"> */
			<form
				onsubmit={() =>
					alert(
						'Sorry, this form is not currently functional. Please email me directly!'
					)
				}
			>
				<Input autocomplete="off" label="Name" />
				<Input autocomplete="off" label="Email" />
				<Input autocomplete="off" label="Message" textArea />
				<Button right submit text="Send Message" />
			</form>
		);
	}
}

export default ContactForm;
