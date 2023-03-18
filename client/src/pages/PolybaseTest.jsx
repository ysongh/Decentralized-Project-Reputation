import React, { useState } from 'react';
import { Container, Heading, Input, Button } from '@chakra-ui/react'
import { Polybase } from "@polybase/client";

const db = new Polybase({
  defaultNamespace: "projecttime",
});

function PolybaseTest() {
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);

  const createCollection = async () => {
    try{
      await db.applySchema(`
        @public
        collection City {
          id: string;
          name: string;
          country?: string;

          constructor (id: string, name: string) {
            this.id = id;
            this.name = name;
          }

          setCountry (country: string) {
            this.country = country;
          }
        }

        @public
        collection Country {
          id: string;
          name: string;

          constructor (id: string, name: string) {
            this.id = id;
            this.name = name;
          }
        }
      `,
        "projecttime"
      ); // your-namespace is optional if you have defined a default namespace
    } catch (error) {
      
    }
  }
  
  const addData = async () => {
    try{
      // Based on the collection code above, "new-york" is the `id` of the new record. 
      // The `id` "new-york" must be unique (not already exist in the collection)
      await db.collection("City").create([city.toLocaleLowerCase(), city]); 
      // new-york is the `id`, New York is the `name`
    } catch (error) {
      
    }
  }

  const readData = async () => {
    try{
      const data = await db.collection("City").get();
      console.log(data);
      setCities(data.data);
    } catch (error) {
      
    }
  }

  return (
    <Container maxW='1000px'>
      <Heading my='3'>Test</Heading>
      <Button onClick={createCollection}>
        Create Collection
      </Button>
      <br />
      <br />
      <Input placeholder='City' onChange={(e) => setCity(e.target.value)}/>
      <Button onClick={addData}>
        Add
      </Button>
      <br />
      <br />
      <Button onClick={readData}>
        Read
      </Button>
      {cities.map(c => (
        <div key={c.data.id}>
          <p>{c.data.name}</p>
        </div>
      ))}
    </Container>
  )
}

export default PolybaseTest;