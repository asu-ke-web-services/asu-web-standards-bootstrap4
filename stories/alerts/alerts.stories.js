import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

import AlertsReadme from './alerts.readme.md'

storiesOf('Alerts', module)
  .addParameters({
    happo: false,
    readme: {
      sidebar: AlertsReadme,
    },
  })

  .add('Examples', () => `<div class="alert alert-primary" role="alert">This is a primary alert—check it out!</div>
<div class="alert alert-secondary" role="alert">This is a secondary alert—check it out!</div>
<div class="alert alert-success" role="alert">This is a success alert—check it out!</div>
<div class="alert alert-danger" role="alert">This is a danger alert—check it out!</div>
<div class="alert alert-warning" role="alert">This is a warning alert—check it out!</div>
<div class="alert alert-info" role="alert">This is a info alert—check it out!</div>
<div class="alert alert-light" role="alert">This is a light alert—check it out!</div>
<div class="alert alert-dark" role="alert">This is a dark alert—check it out!</div>`)




  .add('Link color', () => `<div class="alert alert-primary" role="alert">
  This is a primary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</div>
<div class="alert alert-secondary" role="alert">This is a secondary alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</div>
<div class="alert alert-success" role="alert">This is a success alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</div>
<div class="alert alert-danger" role="alert">This is a danger alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</div>
<div class="alert alert-warning" role="alert">This is a warning alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</div>
<div class="alert alert-info" role="alert">This is a info alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</div>
<div class="alert alert-light" role="alert">This is a light alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</div>
<div class="alert alert-dark" role="alert">This is a dark alert with <a href="#" class="alert-link">an example link</a>. Give it a click if you like.</div>`)




.add('Additional content', () => `<div class="alert alert-success" role="alert"><h4 class="alert-heading">Well done!</h4>
<p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
<hr>
<p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
</div>`)