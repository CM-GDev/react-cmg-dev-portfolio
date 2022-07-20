import React from 'react';

export default function Contact() {
  return (
    <main className='container'>
      <h3 className="blue-text text-darken-1">Contact</h3>
      <form className="col s12 grey lighten-4 card-panel">
        <div className="row">
            <div className="input-field col s12">
                <i class="material-icons prefix">account_circle</i>
                <input id="name" type="text" className="validate" required='' aria-required="true"/>
                <label for="name">Name:</label>
                <span class="helper-text" data-error="Required Field" data-success="That's a cool name">This Field is Required</span>
            </div>
        </div>
        <div className="row">
            <div className="input-field col s12">
                <i class="material-icons prefix">email</i>
                <input id="email" type="email" className="validate"/>
                <label for="email">Email:</label>
                <span class="helper-text" data-error="invalid email" data-success="right">Helper text</span>
            </div>
        </div>
        <div className="row">
            <div className="input-field col s12">
                <i className="material-icons prefix">mode_edit</i>
                <textarea id="icon_prefix2" className="materialize-textarea validate"></textarea>
                <label for="icon_prefix2">Message</label>
                <span class="helper-text" data-error="Required Field" data-success="right">This Field is Required</span>
            </div>
        </div>
        <div className="row">
            <div className="input-field col s12">
                <button className="btn waves-effect waves-light disabled" type="submit" name="action">Submit</button>
            </div>
        </div>
      </form>
      
    </main>
  );
}