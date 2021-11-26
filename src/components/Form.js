import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import emailjs from 'emailjs-com';

export default class Form extends Component {
    render() {
        function enviarEmail(e){
            e.preventDefault();

            emailjs.sendForm('service_6xgnuut','template_999kkk9',e.target,'user_PeLTIQIqkNrsBlMf5YG6H').then(res=>{
                console.log(res);
            })
        }
        return (
            <div style={{width:"80%",margin:"0 auto", marginTop:"15px"}}>
                <div style={{width:"50%",backgroundColor:"lightgrey",margin:"0 auto", padding:"10px"}}>
                    <h1>Formulario de Contacto</h1>
                    <hr/>
                    <form onSubmit={enviarEmail}>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label><b>Nombre</b></label>
                                <input type="text" className="form-control" id="nombre" name="nombre"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label><b>Email</b></label>
                                <input type="text" className="form-control" id="email" name="email"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label><b>Mensaje</b></label>
                            <textarea type="text" className="form-control" id="mensaje" name="mensaje"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{width:"50%", margin:"0 auto",marginTop:"20px"}}>Enviar Correo</button>
                    </form>
                </div>
            </div>
        )
    }
}
