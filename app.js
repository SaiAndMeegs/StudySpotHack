const express = require("express");
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 5432;
const {Pool} = require('pg')
const axios = require('axios')
