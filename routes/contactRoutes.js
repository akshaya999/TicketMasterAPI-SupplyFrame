const express = require("express")
let axios = require('axios')

let apikey = "HMw8kVj0q2TeA5UGAYxPK6FpuSXEfYSF"

var router = express.Router();

router.route("/events/:keyword/:segmentID/:radius/:unit/:geopoint").get((req,res)=>{
    let base_url = "";
    if(req.params.segmentID!="NULL")
    {
        base_url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apikey}&keyword=${req.params.keyword}&segmentId=${req.params.segmentID}&radius=${req.params.radius}&unit=${req.params.unit}&geoPoint=${req.params.geopoint}`
    }
    else{
        base_url = `https://app.ticketmaster.com/discovery/v2/events.json?apikey=${apikey}&keyword=${req.params.keyword}&radius=${req.params.radius}&unit=${req.params.unit}&geoPoint=${req.params.geopoint}`
    }
    console.log(base_url)
    console.log(base_url)
    axios.get(base_url).then(function(response){
        res.send(response.data)
    })
})

router.route("/events_details/:id").get((req,res)=>{
    let base_url = `https://app.ticketmaster.com/discovery/v2/events/${req.params.id}?apikey=${apikey}&`
    axios.get(base_url).then(function(response){
        res.send(response.data)
    })
})

router.route("/venues/:keyword").get((req,res)=>{
    let base_url = `https://app.ticketmaster.com/discovery/v2/venues?apikey=${apikey} &keyword=${req.params.keyword}`
    console.log(base_url)
    axios.get(base_url).then(function(response){
        res.send(response.data)
    })
})

router.route("/ipinfo").get((req,res)=>{
    let base_url = `https://ipinfo.io/?token=ff0a5f7fb71d3b`
    console.log(base_url)
    axios.get(base_url).then(function(response){
        res.send(response.data)
    })
}) 





module.exports = router;