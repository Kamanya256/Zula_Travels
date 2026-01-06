import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:5000/api",
});

export const getFleet = () => API.get("/courier/fleet");

export const createBooking = (data) =>
    API.post("/courier/bookings", data);

export const trackBooking = (trackingId) =>
    API.get(`/courier/track/${trackingId}`);

export const loginUser = (data) =>
    API.post("/auth/login", data);

export const registerUser = (data) =>
    API.post("/auth/register", data);
