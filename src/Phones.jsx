import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Phones = () => {
    const [phones , setPhones] =useState([]);
    useEffect(()=>{
            // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
            // .then(res =>res.json())
            // .then(data=>setPhones(data.data))

            axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data=>{
                const phonedata = data.data.data
                const phonesWithFakeData = phonedata.map(phone =>{
                    const obj = {
                        Name : phone.phone_name,
                        Price :parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                setPhones(phonesWithFakeData)
            })
    } ,[])
    return (
        <div>
            <h3 className="text-4xl">Phones :{phones.length}</h3>
            {/* <BarChart width={600} height={400} data={phones}>
          <Bar dataKey="price" fill="#8884d8" stroke='purple' name="Price"/>
          {/* <Bar dataKey="count" fill="#82ca9d" name="Count" /> */}
        {/* </BarChart> */} 
        <BarChart width={1200} height={400} data={phones}>
                {/* <CartesianGrid strokeDasharray="8 5" /> */}
                <XAxis dataKey="Name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Price" fill="#8884d8"  name="Price" />
                <Bar dataKey="Count" fill="#82ca9d" name="Count" />
            </BarChart>
        </div>
    );
};

export default Phones;