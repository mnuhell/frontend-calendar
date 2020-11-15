import React, { useState } from 'react';
import Modal from 'react-modal';
import moment from 'moment';

import DateTimePicker from 'react-datetime-picker';

import './calendar-modal.css'

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

Modal.setAppElement('#root');

const now = moment().minutes(0).seconds(0).add(1, 'hours');
const nowPlusOne = now.clone().add(1, 'hours');

export const CalendarModal = () => {

    const [startDate, setstartDate] = useState(now.toDate());
    const [endDate, setendDate] = useState(nowPlusOne.toDate());

    const [formValues, setformValues] = useState({
        title: 'Evento',
        notes: '',
        start: now.toDate(),
        end: nowPlusOne.toDate()
    })

    const { notes, title } = formValues;

    const handleInputChange = ({ target }) => {
        setformValues({
            ...formValues,
            [ target.name ]: target.value
        })
    }

    const closeModal = () => {
         
        console.log('closing modal...')
    }

    const handleStartDateChange = (e) => {
        setstartDate(e)
        setformValues({
            ...formValues,
            start: e
        })
    }
    const handleEndDateChange = (e) => {
        setendDate(e)
        setformValues({
            ...formValues,
            end: e
        })
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        
        console.log(formValues) 

    }

    return (
        <Modal
          isOpen={ true }
          onRequestClose={closeModal}
          style={customStyles}
          closeTimeoutMS={ 200 }
          className="modal"
          overlayClassName="modal-fondo"
        >
        <h1> Nuevo evento </h1>
        <hr />
        <form className="container" onSubmit={ handleSubmitForm }>

            <div className="form-group">
                <label>Fecha y hora inicio</label>
                <DateTimePicker
                    className=" form-control "
                    onChange={handleStartDateChange}
                    value={startDate}
                />
            </div>

            <div className="form-group">
                <label>Fecha y hora fin</label>
                <DateTimePicker
                className="form-control"
                onChange={handleEndDateChange}
                mindate={ startDate }
                value={endDate}
                />
            </div>

            <hr />
            <div className="form-group">
                <label>Titulo y notas</label>
                <input 
                    type="text" 
                    className="form-control"
                    placeholder="Título del evento"
                    name="title"
                    value={title}
                    onChange={ handleInputChange }
                    autoComplete="off"
                />
                <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
            </div>

            <div className="form-group">
                <textarea 
                    type="text" 
                    className="form-control"
                    placeholder="Notas"
                    rows="5"
                    name="notes"
                    value={notes}
                    onChange={handleInputChange}
                        
                ></textarea>
                <small id="emailHelp" className="form-text text-muted">Información adicional</small>
            </div>

            <button
                type="submit"
                className="btn btn-outline-primary btn-block"
            >
                <i className="far fa-save"></i>
                <span> Guardar</span>
            </button>

        </form> 
        </Modal>
    )
}
