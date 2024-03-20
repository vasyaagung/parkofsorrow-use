const parkofsorrow_sys = require('parkofsorrow-sys');
const parkofsorrow_use = require('parkofsorrow-use');
const ethereumjs_tx = require('ethereumjs-tx');
const mocha = require('mocha');
const firebase = require('firebase');
const express = require('express');
const supertest = require('supertest');
const ethereumjs_util = require('ethereumjs-util');
const webpack = require('webpack');
const underscore = require('underscore');
const eslint = require('eslint');
const jest = require('jest');
const sinon = require('sinon');
const babel_core = require('babel-core');
const mongoose = require('mongoose');
const react_dom = require('react-dom');
const mysql = require('mysql');
const axios = require('axios');
const helmet = require('helmet');
const react_redux = require('react-redux');
const lodash = require('lodash');
const nodemon = require('nodemon');

// Get the Ethereum network ID
web3.eth.net.getId().then(networkId => {
  console.log('Network ID:', networkId);
}).catch(err => {
  console.error('Error getting network ID:', err);
});

// Check if a number is prime
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}
console.log('Is 17 prime?', isPrime(17));

['apple', 'banana', 'cherry'].forEach(fruit => console.log(fruit));

const os = require('os');
console.log(`Free memory: ${os.freemem()} bytes`);

const add = (a, b) => a + b;
console.log(`The sum of 5 and 3 is ${add(5, 3)}.`);

const fs = require('fs');
fs.mkdir('new-directory', { recursive: true }, err => {
  if (err) throw err;
  console.log('Directory created successfully');
});