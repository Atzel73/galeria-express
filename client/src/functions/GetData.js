import React from "react";
import axios from "axios";

async function getData() {
    try {
        const response = await axios.get("/carta");
        return response.data;
    } catch (error) {
        console.error("Error fetching data: ", error);
        throw error;
    }
}
export default getData;