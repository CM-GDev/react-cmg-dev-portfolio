// importing react
import React from 'react';

// exporting react component
export default function Contact() {
  return (
    <main className='container'>
      <h3 className="blue-text text-darken-1">Contact</h3>
      <form className="col s12 card-panel light-green lighten-5">
        <div className="row">
            <div className="input-field col s12">
                <i class="material-icons prefix">account_circle</i>
                <input id="name" type="text" className="validate" required='true'/>
                <label for="name">Name:</label>
                <span class="helper-text" data-error="Required Field" data-success="That's a cool name">This Field is Required</span>
            </div>
        </div>
        <div className="row">
            <div className="input-field col s12">
                <i class="material-icons prefix">email</i>
                <input id="email" type="email" className="validate" required='true'/>
                <label for="email">Email:</label>
                <span class="helper-text" data-error="invalid email" data-success="right">This Field is Required</span>
            </div>
        </div>
        <div className="row">
            <div className="input-field col s12">
                <i className="material-icons prefix">mode_edit</i>
                <textarea id="icon_prefix2" className="materialize-textarea validate" required='true'></textarea>
                <label for="icon_prefix2">Message</label>
                <span class="helper-text" data-error="Required Field" data-success="right">This Field is Required</span>
            </div>
        </div>
        <div className="row">
            <div className="input-field col s12">
                <a className="btn waves-effect waves-light disabled" type="submit" name="action">Submit</a>
            </div>
            <div>
                <p> <em>Submit Feature Coming Soon</em></p>
            </div>
        </div>
      </form>
      
    </main>
  );
}