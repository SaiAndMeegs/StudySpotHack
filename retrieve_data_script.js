//See server readme for endpoint documentation
const express = require("express");
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 5001;
const Pool = require('pg').Pool
const axios = require('axios')

const pool = new Pool({
    user: "kiyeotntjhtpfw",
    host: "ec2-34-202-127-5.compute-1.amazonaws.com",
    database: "d6h3vnqcknj7pb",
    password: "447b8c3b79b1f866e436495cafcc983b50bd0b76ba695eca6c851c4243d0ea99",
    port: `${port}`,
})

const insertBuilding = async (building_id, building_spire_id, building_name, building_address) => {
    try {
        await client.connect();           // gets connection
        await client.query(
            `INSERT INTO "building" ("building_id", "building_spire_id", "building_name", "building_address")  
             VALUES ($1, $2, $3, $4)`, [building_id, building_spire_id, building_name, building_address]); // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    } finally {
        await client.end();               // closes connection
    }
};

const insertBuildingRoom = async (building_room_id, building_room_spire_id, building_room_name, building_room_meeting_information, building_id) => {
    try {
        await client.connect();           // gets connection
        await client.query(
            `INSERT INTO "building_room" ("building_room_id", "building_room_spire_id", "building_room_name", "building_room_meeting_information", "building_id")  
             VALUES ($1, $2, $3, $4, $5)`, [building_room_id, building_room_spire_id, building_room_name, building_room_meeting_information, building_id]); // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    } finally {
        await client.end();               // closes connection
    }
};

const insertCourse = async (course_id, course_spire_id, course_title, instructor_name, description, meeting_information_id) => {
    try {
        await client.connect();           // gets connection
        await client.query(
            `INSERT INTO "course" ("course_id", "course_spire_id", "course_title", "instructor_name", "description", "meeting_information_id")  
             VALUES ($1, $2, $3, $4, $5, $6)`, [course_id, course_spire_id, course_title, instructor_name, description, meeting_information_id]); // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    } finally {
        await client.end();               // closes connection
    }
};

const insertMeetingInformation = async (meeting_information_id, days, start_time, end_time, building_room_id) => {
    try {
        await client.connect();           // gets connection
        await client.query(
            `INSERT INTO "meeting_information" ("meeting_information_id", "days", "start_time", "end_time", "building_room_id")  
             VALUES ($1, $2, $3, $4, $5)`, [meeting_information_id, days, start_time, end_time, building_room_id]); // sends queries
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    } finally {
        await client.end();               // closes connection
    }
};

console.log(axios)










