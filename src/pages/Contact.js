import Component from '@glimmer/component';
import { setComponentTemplate, createTemplate, templateOnlyComponent } from '@glimmer/core';

import Jumbo from '../components/Jumbo.js';

const Contact = setComponentTemplate(createTemplate({ Jumbo }, `
<Jumbo>
  <h2>Contact Us</h2>
  <p>
    Super Rentals Representatives would love to help you<br>
    choose a destination or answer any questions you may have.
  </p>
  <address>
    Super Rentals HQ
    <p>
      1212 Test Address Avenue<br>
      Testington, OR 97233
    </p>
    <a href="tel:503.555.1212">+1 (503) 555-1212</a><br>
    <a href="mailto:superrentalsrep@glimmerjs.com">superrentalsrep@glimmerjs.com</a>
  </address>
  <a href="/about" class="button">About</a>
</Jumbo>

`),templateOnlyComponent());

export default Contact;
