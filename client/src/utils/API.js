import axios from "axios";

export default {
    // Gets all Items
    getItems: function() {
        return axios.get("/api/item");
    },
    // Gets the item with the given id
    getItem: function(id) {
        return axios.get("/api/item/" + id);
    },
    // Deletes the item with the given id
    deleteItem: function(id) {
        return axios.delete("/api/item/" + id);
    },
    // Saves a item to the database
    saveItem: function(itemData) {
        return axios.post("/api/item", itemData);
    },
    getRecycles: function() {
        return axios.get("api/recycle")
    },
    getRecycle: function(id) {
        return axios.get("/api/item/" + id)
    },
    deleteRecycle: function(id) {
        return axios.delete("api/recycle" + id)
    },
    saveRecycle: function(recycleData) {
        return axios.post("/api/recycle/", recycleData)
    }
};