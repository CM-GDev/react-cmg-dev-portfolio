// importing react
import React from 'react';

// establishing some style variables
const styles = {
    btn: {
        minWidth: '150px',
        marginTop: '5px'
    }
}
// exporting react component
export default function Footer () {
    return (
        <footer className="page-footer blue lighten-2">
            <div className="container center-align" id="footer">
                <div className="row">                            
                    <div className="col s12 m6">
                        <a className="waves-effect waves-light btn blue  darken-1" href="https://github.com/CM-GDev" target="blank" style={styles.btn}>GitHub</a>
                    </div>
                    <div className="col s12 m6">
                        <a className="waves-effect waves-light btn blue darken-1" href="https://www.linkedin.com/in/cristobal-marquez-glynn-engineer/" target="blank" style={styles.btn}>LinkedIn</a>
                    </div>
                </div>
                © 2023 Cristobal Marquez-Glynn
            </div>
        </footer>
    )
}
