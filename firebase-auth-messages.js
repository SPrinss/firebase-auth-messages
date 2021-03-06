import {PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `firebase-auth-messages`
 * Provides Auth message based on Firebase error codes
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class FirebaseAuthMessages extends PolymerElement {

  static get is() { return 'firebase-auth-messages'; }
  static get properties() {
    return {
      code: {
        type: String
      },
      message: {
        type: String,
        computed: '_computedAuthMessage(code, networkRequestFailedMessage, userDisabledMessage, userNotFoundMessage, weakPasswordMessage, emailAlreadyInUseMessage, invalidEmailMessage, customMessage, wrongPasswordMessage, defaultMessage)',
        notify: true
      },
      customMessage: {
        type: String
      },          
      networkRequestFailedMessage: {
        type: String,
        value: 'The network request has failed. Please try again'
      },
      userDisabledMessage: {
        type: String,
        value: 'Account has been disabled by an administrator, please contact us.'
      },
      userNotFoundMessage: {
        type: String,
        value: 'No existing account with this email address.'
      },
      weakPasswordMessage: {
        type: String,
        value: 'The provided password is too weak, add more characters.'
      },
      emailAlreadyInUseMessage: {
        type: String,
        value: 'Email address already in use, please sign in instead.'
      },
      invalidEmailMessage: {
        type: String,
        value: 'The provided email address is invalid.'
      },
      wrongPasswordMessage: {
        type: String,
        value: 'Wrong password. Try again or reset password.'
      },
      defaultMessage: {
        type: String,
        value: 'Unknown error occurred, please try again.'
      }
    }
  }
  _computedAuthMessage(code, networkRequestFailedMessage, userDisabledMessage, userNotFoundMessage, weakPasswordMessage, emailAlreadyInUseMessage, invalidEmailMessage, customMessage, wrongPasswordMessage, defaultMessage) {
    if(!code) return '';
    if(code === 'custom-message') return customMessage;
    if(code === 'auth/network-request-failed') return networkRequestFailedMessage;
    if(code === 'auth/user-disabled') return userDisabledMessage;
    if(code === 'auth/user-not-found') return userNotFoundMessage;
    if(code === 'auth/weak-password') return weakPasswordMessage;
    if(code === 'auth/email-already-in-use') return emailAlreadyInUseMessage;
    if(code === 'auth/invalid-email') return invalidEmailMessage;
    if(code === 'auth/wrong-password') return wrongPasswordMessage;
    return defaultMessage;
  }
}

window.customElements.define(FirebaseAuthMessages.is, FirebaseAuthMessages);
