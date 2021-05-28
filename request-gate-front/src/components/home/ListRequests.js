import React, { useState, useEffect } from 'react';
import { Table, Modal } from 'reactstrap';
import { Link } from 'react-router-dom';

import Pagination from '../pagination/Pagination';

import '../common.css';
import './listRequests.css';
import viewIcon from '../../icon/view.png'

export default (props) => {
  const {requests, url} = props;
  console.log(requests);
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className='listRequests box box_fix'>
      <div className="box__heading">
        <div className='textHeading'>List requests</div>
        <Link to='/request/create-request'><button className='button button--green'>New</button></Link>
      </div>
      <button
        className="button button--white button__filter"
        onClick={toggle}  
      >Filter options</button>
      <Modal isOpen={modal} className="modal__filter">
        <div className="box">
          <div className='filter'>
            <div className='item'>
              <label>Name request</label>
              <input type="text"/>
            </div>
            <div className='item'>
              <label>Content</label>
              <input type="text"/>
            </div>
            <div className='item'>
              <label>Date create</label>
              <input type="date"/>
            </div>
            <div className='item'>
              <label for="status">Status</label>
              <select id="status">
                <option disabled selected value>Select status</option>
                <option>Process</option>
                <option>Pending</option>
                <option>Approve</option>
                <option>Reject</option>
              </select>
            </div >
            <div className='item'>
              <label for="author">Author</label>
              <select id="author">
                <option disabled selected value>Select author</option>
                <option>Rob Holding</option>
                <option>Calum Chambers</option>
                <option>Jack</option>
                <option>Jerry</option>
                <option>Tom</option>
              </select>
            </div>
            <div className='item'>
              <label for="assign">Assign</label>
              <select id="assign">
                <option disabled selected value>Select assign</option>
                <option>Rob Holding</option>
                <option>Calum Chambers</option>
                <option>Jack</option>
                <option>Jerry</option>
                <option>Tom</option>
              </select>
            </div>
            <div className='item'>
              <label for="category">Category</label>
              <select id="category">
                <option disabled selected value>Select Category</option>
                <option>Equipment</option>
                <option>Marketing</option>
                <option>Coding</option>
                <option>Finance</option>
              </select>
            </div>
            
          </div>
          <div className="modal__action">
            <button className="button button--white" onClick={toggle}>Clear</button>
            <button className="button button--white" onClick={toggle}>Filter</button>
          </div>
        </div>
      </Modal>
      <Table id="listRequests">
      <thead>
        <tr>
          <th width="20%">Name Request</th>
          <th width="20%">Content Request</th>
          <th width="15%">Author Create</th>
          <th width="10%">Date Create</th>
          <th width="10%">Category</th>
          <th width="15%">Assigner</th>
          <th width="5%">Status</th>
          <th width="5%">View</th>
        </tr>
      </thead>
      <tbody>
        {typeof(requests)!=='undefined' && requests.map(req => (
          <tr>
            <td>{req.name}</td>
            <td>{req.content}</td>
            <td>{req.author}</td>
            <td>{req.date}</td>
            <td>{req.category}</td>
            <td>{req.assigner}</td>
            <td>{req.status}</td>
            <td>
              <Link to={`${url}/${req.id}`}>
                <img 
                  src={viewIcon}
                  alt='view request'
                  title="View request"
                />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    <Pagination />
    </div>
  );
};