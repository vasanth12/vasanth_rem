import React from 'react';
import { Message } from 'semantic-ui-react';

const ConfirmEmailMessage = () => (
  <div class="ui container">
    <Message info>
      <Message.Header>Please, verify Your email to unlock awesomness</Message.Header>
    </Message>
  </div>
);

export default ConfirmEmailMessage;
